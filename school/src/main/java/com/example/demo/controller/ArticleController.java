package com.example.demo.controller;

import com.example.demo.pojo.Article;
import com.example.demo.service.ArticleService;
import org.springframework.data.domain.Page;
import com.example.demo.result.Result;
import com.example.demo.result.ResultFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class ArticleController {
    @Autowired
    ArticleService articleService;

//    @GetMapping("/api/article/{size}/{page}")
//    public Result listArticles(@PathVariable("size") int size, @PathVariable("page") int page) {
//        return ResultFactory.buildSuccessResult(articleService.list(page - 1, size));
//    }

    @GetMapping("/api/admin/articles")
    public Result listBooks() {
    return ResultFactory.buildSuccessResult(articleService.list());
}

    @PostMapping("/api/article")
    public Article addOrUpdate(@RequestBody Article article) throws Exception {
        articleService.addOrUpdate(article);
        return article;
    }

    @DeleteMapping("/api/admin/content/article/{id}")
    public Result deleteArticle(@PathVariable("id") int id) {
        if(articleService.delete(id)) {
            return ResultFactory.buildSuccessResult("删除成功");
        }
        return ResultFactory.buildFailResult("参数错误，删除失败");
    }

    @GetMapping("/api/categories/{cid}/article")
    public Result listByCategory(@PathVariable("cid") int cid) {
        if (0 != cid) {
            return ResultFactory.buildSuccessResult(articleService.listByCategory(cid));
        } else {
            return ResultFactory.buildSuccessResult("参数错误，获取失败");
        }

    }

    @GetMapping("/api/article/{id}")
    public Result getOneArticle(@PathVariable("id") int id) {
        return ResultFactory.buildSuccessResult(articleService.findById(id));
    }

    @PostMapping("api/admin/content/article")
    public Result saveArticle(@RequestBody Article article) {
        if(articleService.addOrUpdate(article)) {
            return ResultFactory.buildSuccessResult("保存成功");
        }
        return ResultFactory.buildFailResult("参数错误，保存失败");
    }

    @GetMapping("/api/search")
    public Result searchResult(@RequestParam("keywords") String keywords) {
        if ("".equals(keywords)) {
            return ResultFactory.buildSuccessResult(articleService.list());
        } else {
            return ResultFactory.buildSuccessResult(articleService.Search(keywords));
        }
    }
}
