import { Injectable } from '@angular/core';
import { CanActivateFn ,Router } from '@angular/router';
import { AuthService } from './auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
