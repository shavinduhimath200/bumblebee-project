package com.abhi.iniapp.repository;

import com.abhi.iniapp.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface OrderRepository extends JpaRepository<Order, Integer> {
}
