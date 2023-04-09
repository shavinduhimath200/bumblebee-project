package com.abhi.iniapp.repository;

import com.abhi.iniapp.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepository extends JpaRepository<Product, Integer> {
}
