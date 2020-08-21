package com.example.demo.dao;
import com.example.demo.pojo.Article;
import com.example.demo.pojo.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleDAO  extends JpaRepository<Article,Integer> {
    List<Article> findAllByCategory(Category category);
    Article findById(int id);
    List<Article> findAllByArticleTitleLike(String keyword1);
}
