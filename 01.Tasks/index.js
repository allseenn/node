#!/usr/bin/env node
const http = require('http');
const counter = [0, 0, 0];
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        counter[0]++;
        res.end(`
            <a href="/about">About</a>
            <p>page was visited: ${counter[0]} times</p>
            `);
        }
        else if (req.url === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            counter[1]++;
            res.end(`
                <a href="/">Go home</a>
                <p>page was visited: ${counter[1]} times</p>
                `);
            }
            else {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                counter[2]++;
                res.end(`
                    <h3>404:Page not found</h3>
                    <p>page was visited: ${counter[2]} times</p>
                    `);
                }
            });

const port = 3000;
server.listen(port);