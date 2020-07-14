package com.sanarsa.task.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sanarsa.task.entity.Task;

@Repository
public interface TaskDao extends JpaRepository<Task, Long>{

    public Iterable<Task> findAllByCompleted(boolean completed);
    public Iterable<Task> findAllByAssignedTo(String assignedTo);
    public void deleteTaskById(Long id);

}
