package com.abhi.iniapp.service;

import com.abhi.iniapp.dto.ProductDto;

import java.util.List;


public interface ProductService {

    ProductDto saveProduct(ProductDto productDto);

    ProductDto updateProduct(ProductDto productDto);

    ProductDto removeProduct(int id);

    ProductDto getProduct(int id);

    List<ProductDto> getProducts();
}
