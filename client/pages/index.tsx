import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  // 模擬服務分類數據
  const serviceCategories = [
    { id: 1, name: '室內設計', icon: '/icons/interior-design.svg', url: '/services/interior-design' },
    { id: 2, name: '裝修工程', icon: '/icons/renovation.svg', url: '/services/renovation' },
    { id: 3, name: 'AI報價', icon: '/icons/ai-quote.svg', url: '/services/ai-quote' },
    { id: 4, name: 'AI平面圖設計', icon: '/icons/ai-floorplan.svg', url: '/services/ai-floorplan' },
    { id: 5, name: '建材購買', icon: '/icons/materials.svg', url: '/services/materials' },
    { id: 6, name: '傢俬訂製', icon: '/icons/furniture.svg', url: '/services/furniture' },
  ];

  // 模擬推薦服務商數據
  const featuredProviders = [
    { 
      id: 1, 
      name: '優質設計工作室', 
      image: '/images/provider1.jpg',
      rating: 4.9,
      reviewCount: 128,
      description: '專業室內設計服務，為您打造理想家居',
      url: '/providers/1'
    },
    { 
      id: 2, 
      name: '創意空間設計', 
      image: '/images/provider2.jpg',
      rating: 4.8,
      reviewCount: 95,
      description: '創新設計理念，專注細節與功能性',
      url: '/providers/2'
    },
    { 
      id: 3, 
      name: '全能裝修工程', 
      image: '/images/provider3.jpg',
      rating: 4.7,
      reviewCount: 156,
      description: '一站式裝修服務，品質保證',
      url: '/providers/3'
    },
    { 
      id: 4, 
      name: '匠心設計工房', 
      image: '/images/provider4.jpg',
      rating: 4.9,
      reviewCount: 87,
      description: '精緻設計，匠心施工，打造完美家居',
      url: '/providers/4'
    },
  ];

  // 模擬用戶評價數據
  const testimonials = [
    {
      id: 1,
      name: '陳小姐',
      avatar: '/images/user1.jpg',
      rating: 5,
      comment: '非常滿意Goal HK的服務！通過平台找到了專業的設計師，整個過程非常順利，設計效果超出預期。',
      project: '兩房一廳裝修'
    },
    {
      id: 2,
      name: '李先生',
      avatar: '/images/user2.jpg',
      rating: 5,
      comment: 'AI報價功能非常實用，幫我節省了大量時間。最後找到的裝修公司報價也和AI預估相差不大。',
      project: '辦公室翻新'
    },
    {
      id: 3,
      name: '黃太太',
      avatar: '/images/user3.jpg',
      rating: 4,
      comment: '平台上的設計師都很專業，溝通順暢。最終的裝修效果我很滿意，推薦給有需要的朋友。',
