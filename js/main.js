window.onload = () => {
    //Prime Lambda Event Listener
    document.getElementById('calculate').addEventListener('click', primer)

    //Create EC2 Lambda Event Listener
    document.getElementById('create').addEventListener('click', create);

    //Get all EC2s Listener
    document.getElementById('list').addEventListener('click', see_cats);

    document.getElementById('cool').addEventListener('click', get_cat);

    // document.getElementById('pic').addEventListener('click', catpic);
}