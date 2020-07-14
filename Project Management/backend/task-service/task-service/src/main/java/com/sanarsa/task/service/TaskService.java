package com.sanarsa.task.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.sanarsa.task.entity.Task;

import java.util.List;

public interface TaskService {
	
    public ResponseEntity<List<Task>> findAllByCompleted(boolean completed);
    public ResponseEntity<List<Task>> findAllByAssignedTo(String assignedTo);
   
    void updateTask(Task task);
    void deleteTask(Task task);
    void deleteTaskById(Long id);
	void addTask(Task task);
}
