const FormData = require('form-data');
const axios = require('axios')

function adaFoto(req, res, next){
  const form = new FormData()
    
  form.append('file', req.file.buffer.toString('base64'))
  form.append('fileName', req.file.originalname)

  const privateKey = new Buffer.from('private_UTPANzRP5bredNzyQvKwjdO7GVE=' + ":").toString("base64");
  
  axios({
    method: 'POST',
    url: 'https://upload.imagekit.io/api/v1/files/upload',
    data: form,
    headers: {
      ...form.getHeaders(),
      Authorization: `Basic ${privateKey}`,
    }
  })
  .then((data) =>{
    req.body.imageUrl = data.data.url
    next()
  })
  .catch((err) => {
    console.log(err);
    next({msg: 'error image'})
  })
}

async function imageKit(req, res, next) {
  if(req.params.id && !req.file){
    console.log('disini line 33');
    next()
  }else if(req.params.id){
    console.log('ada file');
    adaFoto(req, res, next)
  }else{
    console.log('masuk image kit');
    if (!req.file) {
      console.log('gk ada image');
      next({ name: 'file required' })
    } else {
      if(req.file.size > 225000){
        console.log('file terlalu besar');
        next({name : 'maximum file'})
      }else{
        console.log('ada file lagi');
        adaFoto(req, res, next)
        // // console.log(req.file);
        // const form = new FormData()
    
        // form.append('file', req.file.buffer.toString('base64'))
        // form.append('fileName', req.file.originalname)
    
        // const privateKey = new Buffer.from('private_UTPANzRP5bredNzyQvKwjdO7GVE=' + ":").toString("base64");
        
        // // const uploader = await axios.post(
        // //   "https://upload.imagekit.io/api/v1/files/upload",
        // //   form,
        // //   {
        // //     headers: {
        // //       ...form.getHeaders(),
        // //       Authorization: `Basic ${privateKey}`,
        // //     },
        // //   }
        // // );
        // axios({
        //   method: 'POST',
        //   url: 'https://upload.imagekit.io/api/v1/files/upload',
        //   data: form,
        //   headers: {
        //     ...form.getHeaders(),
        //     Authorization: `Basic ${privateKey}`,
        //   }
        // })
        // .then((data) =>{
        //   req.body.imageUrl = data.data.url
        //   next()
        // })
        // .catch((err) => {
        //   console.log(err);
        //   next({msg: 'error image'})
        // })
      }
  
  
      // let image;
      // console.log(uploader.data)
      // let formatFileImg = uploader.data.name.substring(uploader.data.name.lastIndexOf('.') + 1).toLowerCase()
      // if (formatFileImg === 'png') {
      //   throw ({ name: "format file image cant be PNG" })
      // } else {
      //   if (req.file.size >= 255000) {
      //     throw ({ name: "file size excedeed the maximum size" })
      //   } else {
      //     image = uploader.data.url;
      //   }
      // }
      // req.body.posterUrl = image
      // next()
    }

  }
}

module.exports = imageKit