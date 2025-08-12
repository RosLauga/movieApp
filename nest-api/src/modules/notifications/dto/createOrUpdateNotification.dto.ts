import { IsBoolean, IsString, MinLength } from 'class-validator';

export class createOrUpdateNotificationDto {
@IsString()
id?: string;
@IsString()
@MinLength(5)
title?: string;
@IsString()
date?: string;
@IsString()
description?: string;
@IsBoolean()
readed?: boolean;
}