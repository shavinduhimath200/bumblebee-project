package com.abhi.iniapp.repository;

import com.abhi.iniapp.entity.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;


public interface VendorRepository extends JpaRepository<Vendor, Integer> {
    Vendor findByUserId(int userId);
}
