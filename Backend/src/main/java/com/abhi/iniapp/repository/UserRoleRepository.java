package com.abhi.iniapp.repository;

import com.abhi.iniapp.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRoleRepository extends JpaRepository<UserRole, Integer> {
}
