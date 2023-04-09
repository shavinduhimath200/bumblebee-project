package com.abhi.iniapp.service;

import com.abhi.iniapp.dto.VendorDto;

import java.util.List;


public interface VendorService {

    VendorDto saveVendor(VendorDto vendorDto);

    VendorDto updateVendor(VendorDto vendorDto);

    VendorDto removeVendor(int id);

    VendorDto getVendor(int id);

    List<VendorDto> getVendors();
}
