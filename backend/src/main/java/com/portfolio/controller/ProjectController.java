package com.portfolio.controller;

import com.portfolio.model.Project;
import com.portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects")
public class ProjectController {
    @Autowired
    private ProjectService service;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Project createProject(@RequestBody Project project) {
        return service.addProject(project);
    }

    @GetMapping
    public List<Project> getProjects() {
        return service.findAllProjects();
    }

    @GetMapping("/{projectId}")
    public Project getProject(@PathVariable String projectId) {
        return  service.getProjectByProjectId(projectId);
    }
    @PutMapping
    public Project modifyProject(@RequestBody Project project) {
        return service.updateProject(project);
    }
    @DeleteMapping("/{projectId}")
    public String deleteProject(@PathVariable String projectId) {
        return  service.deleteProject(projectId);
    }

}
