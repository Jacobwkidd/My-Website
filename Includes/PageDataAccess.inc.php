<?php
class PageDataAccess{
    private $link;

    function __construct($link){
        $this->link = $link;
    }
    function getAll(){
        $qStr = "SELECT * FROM pages WHERE published IS NOT NULL";

        $result = mysqli_query($this->link, $qStr);

        // var_dump($result);
        $allPosts = [];
        while($row = mysqli_fetch_assoc($result)){
            $post = [];
            $post["id"] = htmlentities($row['id']);
            $post["title"] = htmlentities($row['title']);
            $post["description"] =htmlentities($row['description']);
            $allPosts[] = $post;
        }
        return $allPosts;
    }
}

function getById($postId){
    $qStr = "SELECT * FROM pages where id =" . $postId . "AND published is NOT NULL";
    $result = mysqli_query($this->link, $qStr);
    if(mysqli_num_rows()){
        
    }
}

?>