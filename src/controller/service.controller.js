import Service from '../models/serviceModel.js';
import {errorHandler} from "../utils/errorHandler.js"


const createService = async(req,res,next)=>{
    try{
        // let {role} = req.user
        // if(role !== 'admin')return next(errorHandler(404,"authorized"))
        const {iconUrl,description,imgUrl,title} = req.body;

        if(!title,!description) return next(errorHandler(404,"Title and Description Required"));

        const service = new Service({iconUrl,description,imgUrl,title})
        await service.save()
        res.status(201).json(service)


    }catch(error){
        next(error)
    }
}

const EditService = async(req,res,next)=>{
    try{
        // let {role} = req.user
        // if(role !== 'admin')return next(errorHandler(404,"authorized"))
        const {iconUrl,description,imgUrl,title} = req.body;

        if(!title,!description) return next(errorHandler(404,"Title and Description Required"));

        const service = await Service.findById(req.params.id)
        if(!service) return next(errorHandler(404,"Service Not Found"))
        service.iconUrl = iconUrl
        service.description = description
        service.imgUrl = imgUrl
        service.title = title
        await service.save()
        res.status(200).json({
            message:'Service Updated Successfully',
            service
        })


    }catch(error){
        next(error)
    }
}

const getAllService =async(req,res,next)=>{
    try{
        // let {role} = req.user
        // if(role !== 'admin')return next(errorHandler(404,"authorized"))
        const service = await Service.find()
        res.status(200).json({
            message:"Services Fetched Successfully",
            service
        })
    }catch(error){
        next(error)
    }
}

const deleteService =async(req,res,next)=>{
    try{
        // let {role} = req.user
        // if(role !== 'admin')return next(errorHandler(404,"authorized"))
       let del =  await Service.findByIdAndDelete(req.params.id)
        if(!del) return next(errorHandler(404,"Service Not Found"))

        res.status(200).json({
            message:'Service Deleted Successfully'
        })
    }catch(error){
        next(error)
    }
}
export default {
    createService,
    EditService,
    deleteService ,
    getAllService
    }