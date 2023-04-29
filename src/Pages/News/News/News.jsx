import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import Editor from '../Editor';

const News = () => {
    const news = useLoaderData();
    const { title, image_url, details,category_id } = news;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/categories/${category_id}`}>
                        <Button variant="danger">All news in this category</Button>

                    </Link>
                </Card.Body>
            </Card>
            <Editor></Editor>
        </div>
    );
};

export default News;