package com.abhi.iniapp.dto;

import com.abhi.iniapp.util.Transformer;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ProductDto implements Transformer {

    private int id;

    private String title;

    private String description;

    private double price;

    private String image;

    @JsonProperty("vendor_id")
    private int vendorId;

    @JsonProperty("registered_at")
    private String registeredAt;
}
