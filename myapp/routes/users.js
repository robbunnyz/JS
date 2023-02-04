const router = require('express').Router()
const user = require('../controller/user')
const { body, validationResult } = require('express-validator')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', (req, res) => {
  res.send('home.ejs')
})


router.get('/signin', (req, res) => {
  res.send('signin.ejs')
})

router.get('/signup', (req, res) => {
  res.send('signup.ejs')
})

router.post('/signup',
    body('password').isLength({ min: 5 }),
    body('password').isString(),
    body('email').isEmail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        userClass.postsighup(req.body.email, req.body.password)

        return res.status(200).json({
            data: 'successfully inserted'
        })
    })

module.exports = router;
