import toast from "react-hot-toast";

export const getBlogs = () =>{
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs');
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs)
    }

    return blogs;
}


export const saveBlog = blog =>{
    let blogs = getBlogs();

    const isExists = blogs.find(b => b.id === blog.id);
    if(isExists){
        return toast.error('Allready Exists')
    }
    blogs.push(blog);

    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success('Saved Successfully')
}



export const deleteBlogs = (id) =>{
    const blogs = getBlogs();
    const remaining = blogs.filter (b =>b.id !== id);

    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Deleted');

}