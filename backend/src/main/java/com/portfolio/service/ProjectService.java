package com.portfolio.service;

import com.portfolio.model.Project;
import com.portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository repository;

    // CRUD

    public Project addProject(Project project) {
        project.setProjectId(UUID.randomUUID().toString().split("-")[0]);
        return repository.save(project);
    }

    public List<Project> findAllProjects() {
        return repository.findAll();
    }

    public Project getProjectByProjectId(String projectId) {
        return  repository.findById(projectId).get();
    }

    public Project updateProject(Project projectRequest) {
        Project existingProject = repository.findById(projectRequest.getProjectId()).get();
        existingProject.setProjectName(projectRequest.getProjectName());
        existingProject.setDescription(projectRequest.getDescription());
        existingProject.setImageLinks(projectRequest.getImageLinks());
        existingProject.setTechImages(projectRequest.getTechImages());

        return repository.save(existingProject);
    }

    public String deleteProject(String projectId) {
        Optional<Project> projectOptional = repository.findById(projectId);

        if (projectOptional.isPresent()) {
            repository.deleteById(projectId);
            return projectId + " project deleted from dashboard";
        } else {
            return "Project with ID " + projectId + " not found";
        }
    }

}
