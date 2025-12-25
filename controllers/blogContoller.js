const BlogModel = require("../models/blogModle");
const fs = require("fs");
const path = require("path");

const index = (req, res) => {
    try {
        res.render("index")
    } catch (error) {
        console.log(error);
    }
}


const blogForm = (req, res) => {
    try {

        res.render("addblog")
    } catch (error) {
        console.log(error);
    }
}

const viewBlog = async (req, res) => {
    try {
        const blogs = await BlogModel.find();
        res.render("viewBlog", { blogs });
    } catch (error) {
        console.log(error);
    }
};


const addBlog = async (req, res) => {
    try {
        console.log(req.body)
        const { path } = req.file;
        const blogData = new BlogModel({ ...req.body, blogImage: path });
        await blogData.save();
        res.redirect("/view-blog");
    } catch (error) {
        console.log(error)
    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await BlogModel.findById(id);

        if (blog) {
            const imagePath = path.join(__dirname, '..', blog.blogImage);
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.log("Error deleting image: ", err);
                } else {
                    console.log("Image deleted successfully");
                }
            });
            await BlogModel.findByIdAndDelete(id);
            res.redirect("/view-blog");
        } else {
            res.redirect("/view-blog");
        }
    } catch (error) {
        console.log(error);
    }
};

const editBlogForm = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await BlogModel.findById(id);
        if (!blog) {
            return res.redirect("/view-blog");
        }
        res.render("edit", { blog });
    } catch (error) {
        console.log(error);
        res.redirect("/view-blog");
    }
};

const editBlog = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedData = req.body;

        if (req.file) {
            let data = await BlogModel.findById(id);
            let imgPath = path.join(__dirname, "..", data?.blogImage);
            fs.unlink(imgPath, (err) => {
                if (err) {
                    console.log("Error deleting old image: ", err);
                } else {
                    console.log("Old image deleted successfully");
                }
            });

            updatedData.blogImage = req.file.path;
        }

        await BlogModel.findByIdAndUpdate(id, updatedData);
        res.redirect("/view-blog");
    } catch (error) {
        console.log(error);
        res.redirect("/view-blog");
    }
}



module.exports = { index, blogForm, addBlog, viewBlog, deleteBlog, editBlogForm, editBlog };


