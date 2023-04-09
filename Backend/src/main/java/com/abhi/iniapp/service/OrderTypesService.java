package com.abhi.iniapp.service;

import com.abhi.iniapp.dto.OrderTypesDto;
import com.abhi.iniapp.dto.ProductDto;

import java.util.List;


public interface OrderTypesService {

    OrderTypesDto getOrderType(int id);

    List<OrderTypesDto> getOrderTypes();
}
