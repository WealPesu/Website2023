const passport = require("passport")
const User = require("./models/users")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const GOOGLE_CLIENT_ID=process.env.CLIENT_ID
const GOOGLE_CLIENT_SECRET=process.env.CLIENT_SECRET

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        const name = profile.displayName
        const email = profile.emails[0].value
        const image_url = profile.photos[0].value
        const google_id = profile.id
        //check if user already exists in our db
        User.findOne({google_id}).then((currentUser)=>{
            if(currentUser){
                //already have this user
                console.log("user is: ",currentUser)
                done(null,currentUser)
            }else{
                //if not, create user in our db

        new User ({
            name:name,
            email:email,
            image_url:image_url,
            google_id:google_id
        }).save().then((newUser)=>{
            console.log("new user: ",newUser)
        })
    }})
        // const profileParams=new User({
        // name,
        // email,
        // image_url,
        // google_id
        // })
        // profileParams.save().then(() => {
        //     console.log("user saved!");
        // }).catch(er => console.log(er))
        done(null,profile)
        // const google_id = profile.id
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //     // User.save()
        //     done(user,null)
        // });

}));

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});

