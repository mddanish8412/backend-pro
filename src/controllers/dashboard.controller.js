import mongoose from "mongoose";
import { Video } from "../models/video.model.js";
import { Subscription } from "../models/subscription.model.js";
import { Like } from "../models/like.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// GET /api/channel/:channelId/stats
const getChannelStats = asyncHandler(async (req, res) => {
    const { channelId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(channelId)) {
        throw new ApiError(400, "Invalid channel ID");
    }

    // Get total videos by channel
    const videos = await Video.find({ owner: channelId });

    const totalVideos = videos.length;

    const totalViews = videos.reduce((sum, video) => sum + (video.views || 0), 0);

    const videoIds = videos.map(video => video._id);

    // Get total likes on videos of the channel
    const totalLikes = await Like.countDocuments({
        video: { $in: videoIds }
    });

    // Get total subscribers of the channel
    const totalSubscribers = await Subscription.countDocuments({
        channel: channelId
    });

    const stats = {
        totalVideos,
        totalViews,
        totalLikes,
        totalSubscribers
    };

    res.status(200).json(new ApiResponse(200, stats, "Channel statistics fetched successfully"));
});

// GET /api/channel/:channelId/videos
const getChannelVideos = asyncHandler(async (req, res) => {
    const { channelId } = req.params;
    const { page = 1, limit = 10 } = req.query;

    if (!mongoose.Types.ObjectId.isValid(channelId)) {
        throw new ApiError(400, "Invalid channel ID");
    }

    const videos = await Video.find({ owner: channelId })
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(parseInt(limit));

    res.status(200)
    .json(new ApiResponse(200, videos, "Channel videos fetched successfully"));
});

export {
    getChannelStats,
    getChannelVideos
};
