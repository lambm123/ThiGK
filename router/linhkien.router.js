var controller= require('../controller/linhkien');
var aws = require('../uploadAWS')
var express= require('express');
var router= express.Router();
module.exports= router;
router.get('/linhkien', controller.getAllSinhVien);
router.get('/linhkien/add', controller.getAddSinhVien);
router.get('/linhkien/update/:id', controller.getUpdateSinhVien);
router.get('/linhkien/delete/:id', controller.deleteSinhVien);

router.post('/linhkien/upload', aws.Upload.any(), controller.Upload);
router.post('/addsinhvien', controller.createSinhVien);
router.post('/linhkien/update', controller.updateSinhVien);