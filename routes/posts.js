const express = require('express')
const router= express.Router()

// import database
const koneksi = require('../config/database')

// Insert data dan validasi
const {body, validationResult} = require('express-validator')


// membaca data
router.get('/', function(req,res){
    koneksi.query('SELECT * FROM posts ORDER BY id desc',
        function(error,rows){
        if(error) {
            return res.status(500).json({
                status: false,
                message: 'db nggak nyambung',
            })
        }else {
            return res.status(200).json({
                status: true,
                message: 'menampilkan data tabel posts',
                data: rows
            })
        }
    })
})

// insert data
router.post('/music',
[
    body('band').notEmpty(),
    body('tahun_pembentukan').notEmpty(),
    body('genre').notEmpty(),
    body('anggota').notEmpty(),
    body('vocalist').notEmpty(),
    body('guitarist').notEmpty(),
    body('bassist').notEmpty(),
    body('drummer').notEmpty(),
    body('album').notEmpty(),
    body('judul_lagu').notEmpty(),

], (req,res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(422).json({errors:errors.array})
    }

    let formData = {
        band : req.body.band,
        tahun_pembentukan : req.body.tahun_pembentukan,
        anggota : req.body.anggota,
        vocalist : req.body.vocalist,
        guitaris : req.body.guitaris,
        bassist : req.body.bassist,
        drummer : req.body.drummer,
        genre : req.body.genre,
        album : req.body.album,
        judul_lagu : req.body.judul_lagu,
    }

    // masukkan data / query
    koneksi.query('INSERT INTO posts SET ?', formData,
        function (err, rows){
            if (err){
                return res.status(500).json({
                    status : false,
                    message : 'servermu error',
                })
            } else {
                return res.status(201).json({
                    status : true,
                    message : 'berhasil input data',
                    data : rows[0]
                })
            }
        }
    )
})

// detail
router.get('/:id', function(req, res) {
    let id = req.params.id
    koneksi.query(`SELECT * FROM posts WHERE id=${id}`, 
        function (error, rows) {
            if(error) {
                return res.status(500).json({
                    status : false,
                    message : 'servermu error lagiii'
                })
            }

            // pencarian posts
            if(rows.length <= 0) {
                return res.status(404).json({
                    status : false,
                    message : 'data tidak ditemukan'
                })
            }else{
                return res.status(200).json({
                    status : true,
                    message : 'menampilkan data post',
                    data : rows[0]
                })
            }
        }
    )
})

// update
router.patch('/update/:id', [
    // validasi
    body('band').notEmpty(),
    body('tahun_pembentukan').notEmpty(),
    body('genre').notEmpty(),
    body('anggota').notEmpty(),
    body('vocalist').notEmpty(),
    body('guitarist').notEmpty(),
    body('bassist').notEmpty(),
    body('drummer').notEmpty(),
    body('album').notEmpty(),
    body('judul_lagu').notEmpty(),

], (req, res) => {
    const errors = validationResult (req) 
    if (!errors.isEmpty()) {
        return res.status(422).json({
            status : false,
            message : 'validasi gagal',
            data : errors.array()
        })
    }

    // id
    let id = req.params.id
    
    //  data post
    let formData = {
        band : req.body.band,
        tahun_pembentukan : req.body.tahun_pembentukan,
        anggota : req.body.anggota,
        vocalist : req.body.vocalist,
        guitaris : req.body.guitaris,
        bassist : req.body.bassist,
        drummer : req.body.drummer,
        genre : req.body.genre,
        album : req.body.album,
        judul_lagu : req.body.judul_lagu,
    }

    // update query
    koneksi.query(`UPDATE posts set ? WHERE id=${id}`,
        formData,function(error, rows){
            if(error){
                return res.status(500).json({
                    status : false,
                    message : 'gagal update data',
                })
            }else {
                return res.status(200).json ({
                    status : true,
                    message : 'update data post berhasil',
                })
            }
        }
    )
})

// delete
router.delete('/delete/(:id)',
    function (req,res){
        let id = req.params.id

        koneksi.query(`DELETE FROM posts WHERE id=${id}`,
            function(error, rows){
                if(error){
                     return res.status(500).json({
                        status : false,
                        message : 'gagal hapus data',
                     })
                }else{
                    return res.status(200).json({
                        status : true,
                        message : 'hapus data post berhasil',
                    })
                }
            }
        )
    })

module.exports = router