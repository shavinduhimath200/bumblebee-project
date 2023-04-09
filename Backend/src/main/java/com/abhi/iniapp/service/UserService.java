package com.abhi.iniapp.service;

import com.abhi.iniapp.dto.AuthDto;
import com.abhi.iniapp.dto.UserDto;
import com.abhi.iniapp.entity.User;

import java.util.List;


public interface UserService {

    UserDto saveUser(UserDto userDto);

    UserDto updateUser(UserDto userDto);

    UserDto removeUser(int id);

    UserDto getUser(int id);

    List<UserDto> getUsers();

    UserDto authenticate(AuthDto authDto);

}
