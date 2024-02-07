<?php

namespace App\Http\Controllers;

use App\Models\Media;
use Illuminate\Http\Request;

class MediaController extends Controller
{
    public function all()
    {
        $movies = Media::all()->where('type', 'movie')->sortByDesc('total_views');
        $tv_shows = Media::all()->where('type', 'tv_show')->sortByDesc('total_views');

        return response()->json(['movies' => $movies, 'tv_shows' => $tv_shows], 200);
    }

    public function show($slug)
    {
        $media = Media::where('slug', $slug)->first();

        if (!$media) {
            return response()->json(['error' => 'Media not found'], 404);
        }

        return response()->json($media, 200);
    }

    public function getByTitle($title)
    {
        $media = Media::where('title', 'like', '%' . $title . '%')->get();

        return response()->json(['media' => $media], 200);
    }
}
