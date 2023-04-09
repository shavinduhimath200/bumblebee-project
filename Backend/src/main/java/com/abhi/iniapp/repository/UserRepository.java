package com.abhi.iniapp.repository;

import com.abhi.iniapp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Integer> {

    User findByIdAndStatus(int id, int status);

    User findByEmail(String email);

}
