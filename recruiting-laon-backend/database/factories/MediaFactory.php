<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;


class MediaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'type' => $this->faker->randomElement(['movie', 'tv_show']),
            'title' => $this->faker->title(),
            'original_title' => $this->faker->title(),
            'year' => $this->faker->year(),
            'duration' => $this->faker->numberBetween(40, 300),
            'genre' => $this->faker->randomElement(['action', 'adventure', 'animation', 'biography', 'comedy', 'crime', 'documentary', 'drama', 'family', 'fantasy', 'film-noir', 'history', 'horror', 'music', 'musical', 'mystery', 'romance', 'sci-fi', 'sport', 'thriller', 'war', 'western']),
            'synopsis' => $this->faker->sentence(),
            'cast' =>  $this->faker->sentence(),
            'awards' =>  $this->faker->sentence(),
            'director' =>  $this->faker->name(),
            'reviews' =>  $this->faker->numberBetween(5, 10),
            'link_cover' =>  $this->faker->imageUrl(),
            'link_trailer' =>  $this->faker->url(),
            'slug' =>  $this->faker->slug(),
            'total_views' =>  $this->faker->numberBetween(1000, 1000000),
        ];
    }
}
