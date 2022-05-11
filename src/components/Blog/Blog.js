import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css';
import { Table } from 'react-bootstrap';

const Blog = () => {
   
    return (
        <div className='m-4 ' >
            <h1 className='text-center text-primary m-2 p-2 backGcolor' >Some Important Question and Answer</h1>
            <div className='accordion-section '>
                <div className='border m-2 p-2 backGcolor' >
                    <h2 className=' bold' >1. Difference between javascript and nodejs</h2>
                </div>
                <div className='border m-2 p-2 backGcolor' >

                    <Table striped bordered hover responsive="sm">
                        <thead>
                            <tr>
                                <th>JavaScript</th>
                                <th>Node.js</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JavaScript is a Programming Language</td>
                                <td> NodeJs is JavaScript runtime environment</td>
                            </tr>
                            <tr>
                                <td>Only run on Browser </td>
                                <td> When Run javaScript code Outsite on browser it help NodeJs</td>
                            </tr>
                            <tr>
                                <td>Basically used Client site</td>
                                <td>Basically used Server site</td>
                            </tr>
                            <tr>
                                <td>It capable to add HTML and it play with DOM</td>
                                <td> NodeJs is not capable to ADD HTML tag</td>
                            </tr>
                            <tr>
                                <td>It is font-end developmnet</td>
                                <td> It is Server-site development</td>
                            </tr>
                            <tr>
                                <td>Javascript upgrade version of ECMA script that uses chrome-V8</td>
                                <td> NodeJs written by C,C++,javaScript</td>
                            </tr>
                            <tr>
                                <td>
                                    যখন কোনো browser এ js code run করে তখন browser এর নির্দিষ্ট কিছু engine সেই কোডগুলোকে machine code এ convert করে browser এ show করে
                                </td>
                                <td>
                                    nodeJs এর মধ্যে V8 engine অন্তর্ভুক্ত থাকে যেটা js code কে সহজেই run করে ও parse করে
                                </td>
                            </tr>
                        </tbody>

                    </Table>
                </div>

                <br /><br />
                <div className='border m-2 p-2 backGcolor' >
                    <h2 className=' bold' >2. When should you use nodejs and when should you use mongodb ?</h2>
                </div>
                <div className='border m-2 p-2 backGcolor' >
                    <p className='border m-2 p-2 backGcolor'>
                        <strong>Node.js</strong><br />
                        যখন reat -time application এর প্রয়োজন হয় তখন nodeJs ব্যবহার করা যুক্তিযুক্ত। অর্থাৎ chat  বা messaging করার application  তৈরী করার প্রয়োজনে nodeJs ব্যবহার করা যেতে পারে <br />
                        তাছাড়া ,জরুরী ভিত্তিতে কোনো application update করার দরকার হলে nodeJs বেবহার করা যেতে পারে <br />
                        যখন smaller package এর মাধ্যমে অনেক data পাঠাতে nodeJs অসাধারণ ভূমিকা পালন করে <br />
                        আবার , streaming application এর ক্ষেত্রে audio ,video এর data perfectly আর smoothly ভাবে পাঠাতে nodeJs সুবিধাজনক।<br />

                        তাই এসব ক্ষেত্রে , nodeJs ব্যবহারে ভালো সুবিধা পাওয়া যায়
                    </p>
                    <p className='border m-2 p-2 backGcolor'>
                        <strong>MongoDB</strong><br />
                        যখন key এবং value  এর pair থাকে তখন NoSQL ব্যবহার করা যুক্তিযুক্ত।
                        সেক্ষেত্রে MongoDB ভালো performance দিবে <br />
                        MongoDB আরেকটি সুবিধা হলো একটি Collection এর মধ্যে অন্য collection কেও add করা যায় <br />
                        কোনো single data ,অর্থাৎ Array কেও mongoDB তে add করা যায়। <br />
                        mongoDB তে multiple data, key ,value এর মাধ্যমে সহজেই add করা যায় <br />
                        MongoDB হলো Extrct ,Transform ,Load (ETL ) এই তিনটির সমন্বয়ে একটি framework . যেটা complex data pipelines কে সহজ করে

                    </p>


                </div>
                <br /><br />
                <div className='border m-2 p-2 backGcolor' >
                    <h2 className=' bold' >2. Differences between sql and nosql databases</h2>
                </div>
                <div className='border m-2 p-2 backGcolor' >

                    <Table striped bordered hover responsive="sm">
                        <thead>
                            <tr>
                                <th>SQL</th>
                                <th>NoSQL</th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>এটা হলো relation database </td>
                                <td>এটা হলো non -relation databases </td>
                            </tr>
                            <tr>
                                <td>data সংরক্ষণে same structure use করে </td>
                                <td> data সংরক্ষণে key value use করে </td>
                            </tr>
                            <tr>
                                <td>এটা vertically scalble </td>
                                <td>এটা  horizontally scallable </td>
                            </tr>
                            <tr>
                                <td>এটা হলো table base </td>
                                <td> এটা হলো key value pair , document based , graph database , wide - column stores </td>
                            </tr>
                            <tr>
                                <td>SQL database ACID কে follow করে।  Atomicity ,Consistency , Isolution ,Durability </td>
                                <td> Non -SQL  database CAP follow করে। Consistency , Availablity ,Partition </td>
                            </tr>
                            <tr>
                                <td>Example:: MySql, Oracle, PostgreSQL, MicrosoftSQL server</td>
                                <td> Example:: MongoDB, RevenDB, CouchDB, Redis, BigTable</td>
                            </tr>

                        </tbody>

                    </Table>
                </div>
                <br /><br />
                <div className='border m-2 p-2 backGcolor' >
                    <h2 className=' bold' >4. What is the purpose of jwt and how does it work  ?</h2>
                </div>
                <div className='border m-2 p-2 backGcolor' >
                    <p>
                        <strong>Purpose of Json Web Token</strong> <br />
                        কোনো user কে protected route এ JWT (Json Web Token ) এর মাধ্যমে access করার permission দেয়া হয়।  এটাই হলো main perpose . <br /><br />
                        <strong>How works JWT</strong><br />
                        user যখন login বা signIn করে তখন একটি JWT create হয়। <br />
                        user protected route বা অন্য domain এ access করতে চায় ,তখন user এর information এর মদ্ধে token আছে কিনা check করা হয়। <br />
                        যদি থাকে তাহলে protected route বা protected domain এ user access করতে পারে
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Blog;