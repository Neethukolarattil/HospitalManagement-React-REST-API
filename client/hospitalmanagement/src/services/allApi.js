import commonApi from "./commonApi";

export const addBooking=(data)=>{
    return commonApi("POST","http://127.0.0.1:8000/hospital/",data)
}

export const listBooking=()=>{
    return commonApi("GET","http://127.0.0.1:8000/hospital/","")
}

export const deleteBooking=(id)=>{
    return commonApi("DELETE",`http://127.0.0.1:8000/hospital/${id}/`,"")
}

export const getBooking=(id)=>{
    return commonApi("GET",`http://127.0.0.1:8000/hospital/${id}/`,"")
}

export const editBooking=(id,data)=>{
    return commonApi("PUT",`http://127.0.0.1:8000/hospital/${id}/`,data)
}