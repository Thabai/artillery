import { expect, Page } from '@playwright/test';
require('dotenv').config();

const {
    TARGET_MAIN: url,
    USER: username,
    PASSWORD: password 
} = process.env;


export async function testLogin(page:Page) {
    await page.goto(url)
    await page.getByTestId('navbar-login').click()
    await page.getByTestId('username-textbox').fill(username)
    await page.getByTestId('password-textbox').fill(password)
    await page.getByTestId('login-button').click()
    await expect(page.getByTestId('navbar-logout')).toBeVisible()
}