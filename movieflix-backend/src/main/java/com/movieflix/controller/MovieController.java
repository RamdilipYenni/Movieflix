package com.movieflix.controller;

import com.movieflix.model.Movie;
import com.movieflix.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/movies")
@CrossOrigin(origins = "http://localhost:5173")


public class MovieController {

    @GetMapping("/")
    public String home() {
        return "MovieFlix Backend is running!";
    }


    @Autowired
    private MovieService movieService;

    @GetMapping
    public List<Movie> getMovies(
        @RequestParam(required = false) String search,
        @RequestParam(required = false) String genre
    ) {
        return movieService.searchMovies(search, genre);
    }

    @GetMapping("/{id}")
    public Movie getMovie(@PathVariable String id) {
        return movieService.getMovieById(id);
    }


}
