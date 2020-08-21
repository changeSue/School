package com.example.demo.service;

import com.example.demo.dao.ArticleDAO;
import com.example.demo.pojo.Article;
import com.example.demo.pojo.Category;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {
        @Autowired
        ArticleDAO articleDAO;

        @Autowired
        CategoryService categoryService;

//        public Page list(int page, int size) {
//            Sort sort = Sort.by(Sort.Direction.DESC, "id");
//            return articleDAO.findAll(PageRequest.of(page, size, sort));
//        }

    public List<Article> list() {
        Sort sort = Sort.by(Sort.Direction.DESC, "id");
        return articleDAO.findAll(sort);
    }


    public boolean addOrUpdate(Article article) {
            try {
                articleDAO.save(article);
            } catch (IllegalArgumentException e) {
                return false;
            }
            return true;
        }

        public Article findById(int id) {
        return articleDAO.findById(id);
    }

    public boolean delete(int id) {
        try {
            articleDAO.deleteById(id);
        } catch (IllegalArgumentException e) {
            return false;
        }
        return true;
    }

       public List<Article> listByCategory(int cid) {
            Category category = categoryService.get(cid);

            return articleDAO.findAllByCategory(category);
        }

        public List<Article> Search(String keywords) {
            return articleDAO.findAllByArticleTitleLike('%' + keywords + '%');
        }

}
