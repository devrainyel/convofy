import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';
import { ENV } from './lib/env.js';
import { app, server } from "./lib/socket.js";
import cors from 'cors';

const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;

app.use(express.json({ limit: '10mb' })) // req.body - increased limit for image uploads
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(cors({ 
  origin: ENV.CLIENT_URL || 'http://localhost:5173', 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

// ready for deployment
if (ENV.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'));
  });
}

server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  connectDB();
});
