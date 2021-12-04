function Profile ( {img,name,status}){
    return(
        <div className='profile'>
            <div className='profileImg'><img src={img}></img></div>
            <h1>{name}</h1>
            <p>{status}</p>
        </div>
    )
}

export default Profile;