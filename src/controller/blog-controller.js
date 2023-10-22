const express = require('express');
const blog = require('../model/blog')

const getAllBlogs = async(req,res)=>{
   let blogs;
   try {
    blogs= await blog.find();
   } catch (error) {
    return console.log(error);
   }

   if(!blog){
    return res.status(401).json({message:"No Blog avalible"})
   }

   return res.status(200).json({blogs});
}

const addBlogs = async(req,res)=>{
  const {title,description,image,user}=req.body;
const Blog=new blog({
   title,
   description,
   image,
   user
});

try {
  await Blog.save()
} catch (error) {
  return console.log(error);
}
return res.status(200).json({Blog});
}

//update
const updateBlogs=async(req,res)=>{

const blogId=req.params.id;
const {title,description}=req.body;
let Blog;
try {
   Blog=await blog.findByIdAndUpdate(blogId,{
    title,
    description
  })
  
} catch (error) {
  return console.log(error);
}

if(!Blog){
  return res.status(400).json({message:"No blog Cant update"})
}

return res.status(200).json({Blog})
}

//Get BY ID SEARCH
const getbyid = async(req,res)=>{
  
  const blogid = req.params.id;
  let Blog;
  try {
    Blog=await blog.findById(blogid);
  } catch (error) {
    return console.log(error);
  }
  if(!Blog){
    return res.status(404).json({message:"No blog Found  "})
  }
  return res.status(200).json({Blog});
}
// Delete Blog
const deleteBlock = async(req,res)=>{
  
  const blogid = req.params.id;
  let Blog;
  try {
    Blog=await blog.findByIdAndRemove(blogid);
  } catch (error) {
    return console.log(error);
  }
  if(!Blog){
    return res.status(404).json({message:"No blog Found can't Delete "})
  }
  return res.status(200).json({message:"Blog Deleted "});
}

module.exports = {getAllBlogs,addBlogs,updateBlogs,getbyid,deleteBlock}