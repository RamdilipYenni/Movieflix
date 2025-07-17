package com.movieflix.service;

import com.movieflix.model.Movie;
import com.movieflix.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepo;

    public List<Movie> getAllMovies() {
        return movieRepo.findAll();
    }

    public List<Movie> searchMovies(String title, String genre) {
        if (title != null && !title.isEmpty()) {
            return movieRepo.findByTitleContainingIgnoreCase(title);
        } else if (genre != null && !genre.isEmpty()) {
            return movieRepo.findByGenreContaining(genre);
        } else {
            return movieRepo.findAll();
        }
    }

    public Movie getMovieById(String id) {
        return movieRepo.findById(id).orElse(null);
    }
}

