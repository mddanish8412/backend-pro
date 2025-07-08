import mongoose from "mongoose";
import { Comment } from "../models/comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getVideoComments = asyncHandler(async (req, res) => {
    const { videoId } = req.params;
    const { page = 1, limit = 10 } = req.query;

    const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        sort: { createdAt: -1 }, // Sort by createdAt descending
    };

    const comments = await Comment.paginate({ videoId }, options);

    res.json(comments);
});

const addComment = asyncHandler(async (req, res) => {
    const { videoId } = req.params;
    const { text } = req.body;

    const newComment = new Comment({
        videoId,
        text,
        // You might want to add other fields like userId or username here
    });

    const savedComment = await newComment.save();

    res.status(201).json(savedComment);
});

const updateComment = asyncHandler(async (req, res) => {
    const { commentId } = req.params;
    const { text } = req.body;

    const updatedComment = await Comment.findByIdAndUpdate(
        commentId,
        { text },
        { new: true, runValidators: true }
    );

    if (!updatedComment) {
        throw new ApiError(404, "Comment not found");
    }

    res.json(updatedComment);
});

const deleteComment = asyncHandler(async (req, res) => {
    const { commentId } = req.params;

    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
        throw new ApiError(404, "Comment not found");
    }

    res.json({ message: "Comment deleted successfully" });
});

export {
    getVideoComments,
    addComment,
    updateComment,
    deleteComment
};
