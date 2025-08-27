'use client';
import { useState } from 'react';

const Rides = () => {
  const [viewMode, setViewMode] = useState('table');
  
  const rides = [
    { id: 1, rider: 'Sarah Johnson', driver: 'Mike Wilson', start: 'IGI Airport', end: 'Connaught Place', status: 'Completed', time: '10:30 AM', fare: '₹450', distance: '12.5 km', duration: '25 min' },
    { id: 2, rider: 'John Doe', driver: 'Lisa Chen', start: 'Select City Mall', end: 'Dwarka Sector 21', status: 'Active', time: '11:15 AM', fare: '₹320', distance: '8.2 km', duration: '18 min' },
    { id: 3, rider: 'Emma Davis', driver: 'Tom Brown', start: 'Cyber Hub', end: 'Metro Station', status: 'Cancelled', time: '09:45 AM', fare: '₹280', distance: '6.8 km', duration: '15 min' },
    { id: 4, rider: 'Alex Smith', driver: 'Jane Wilson', start: 'Leela Palace', end: 'IGI Terminal 3', status: 'En Route', time: '12:00 PM', fare: '₹520', distance: '15.3 km', duration: '32 min' },
    { id: 5, rider: 'Brian Anderson', driver: 'David Kumar', start: 'DU North Campus', end: 'Khan Market', status: 'Active', time: '01:20 PM', fare: '₹180', distance: '4.2 km', duration: '12 min' },
    { id: 6, rider: 'Nicole Thompson', driver: 'Raj Patel', start: 'Gold Gym', end: 'Sector 18 Noida', status: 'Completed', time: '02:45 PM', fare: '₹380', distance: '11.8 km', duration: '28 min' },
    { id: 7, rider: 'Kevin Rodriguez', driver: 'Amit Singh', start: 'Mumbai Airport', end: 'Bandra West', status: 'En Route', time: '03:15 PM', fare: '₹420', distance: '13.5 km', duration: '35 min' },
    { id: 8, rider: 'Stephanie Walker', driver: 'Priya Sharma', start: 'Andheri East', end: 'Powai', status: 'Active', time: '04:30 PM', fare: '₹250', distance: '7.3 km', duration: '18 min' },
    { id: 9, rider: 'Timothy Young', driver: 'Rohit Gupta', start: 'Phoenix Mall', end: 'AIIMS Delhi', status: 'Completed', time: '05:10 PM', fare: '₹340', distance: '9.7 km', duration: '22 min' },
    { id: 10, rider: 'Rachel King', driver: 'Suresh Kumar', start: 'Gurgaon Cyber City', end: 'Railway Station', status: 'Cancelled', time: '06:00 PM', fare: '₹290', distance: '8.1 km', duration: '19 min' },
    { id: 11, rider: 'Gregory Scott', driver: 'Neha Agarwal', start: 'Leela Palace', end: 'CP Metro Station', status: 'Completed', time: '07:25 PM', fare: '₹160', distance: '3.8 km', duration: '11 min' },
    { id: 12, rider: 'Melissa Hill', driver: 'Vikram Joshi', start: 'Lodhi Gardens', end: 'IGI Terminal 3', status: 'En Route', time: '08:40 PM', fare: '₹480', distance: '14.2 km', duration: '31 min' },
    { id: 13, rider: 'Jonathan Baker', driver: 'Kavita Reddy', start: 'Ryan International', end: 'Vasant Kunj', status: 'Active', time: '09:15 PM', fare: '₹220', distance: '6.5 km', duration: '16 min' },
    { id: 14, rider: 'Kimberly Carter', driver: 'Arjun Mehta', start: 'DLF Mall', end: 'Cyber City', status: 'Completed', time: '10:30 PM', fare: '₹140', distance: '3.2 km', duration: '9 min' },
    { id: 15, rider: 'Anthony Perez', driver: 'Sunita Verma', start: 'Fortis Hospital', end: 'Vasant Kunj', status: 'Active', time: '11:45 PM', fare: '₹200', distance: '5.8 km', duration: '14 min' },
    { id: 16, rider: 'Elizabeth Turner', driver: 'Manoj Tiwari', start: 'Bangalore Airport', end: 'Koramangala', status: 'En Route', time: '12:20 AM', fare: '₹550', distance: '16.8 km', duration: '38 min' },
    { id: 17, rider: 'Ryan Campbell', driver: 'Deepika Nair', start: 'Whitefield', end: 'UB City Mall', status: 'Active', time: '01:10 AM', fare: '₹380', distance: '12.1 km', duration: '26 min' },
    { id: 18, rider: 'Michelle Evans', driver: 'Ravi Shankar', start: 'Indiranagar', end: 'Majestic', status: 'Completed', time: '02:35 AM', fare: '₹270', distance: '8.9 km', duration: '21 min' },
    { id: 19, rider: 'David Collins', driver: 'Pooja Malhotra', start: 'Forum Mall', end: 'Cubbon Park', status: 'Cancelled', time: '03:50 AM', fare: '₹150', distance: '4.1 km', duration: '12 min' },
    { id: 20, rider: 'Lisa Sanchez', driver: 'Karan Kapoor', start: 'Hyderabad Airport', end: 'Hitec City', status: 'Active', time: '04:25 AM', fare: '₹420', distance: '13.7 km', duration: '29 min' },
    { id: 21, rider: 'Mark Rogers', driver: 'Anjali Desai', start: 'Oakridge School', end: 'Banjara Hills', status: 'Completed', time: '05:40 AM', fare: '₹180', distance: '5.2 km', duration: '14 min' },
    { id: 22, rider: 'Amanda Foster', driver: 'Rajesh Khanna', start: 'Pune Airport', end: 'Koregaon Park', status: 'En Route', time: '06:15 AM', fare: '₹350', distance: '10.8 km', duration: '24 min' },
    { id: 23, rider: 'Christopher Lee', driver: 'Meera Jain', start: 'Phoenix Mall', end: 'Hinjewadi', status: 'Active', time: '07:30 AM', fare: '₹280', distance: '8.5 km', duration: '19 min' },
    { id: 24, rider: 'Jessica Brown', driver: 'Sanjay Yadav', start: 'Camp Area', end: 'Viman Nagar', status: 'Cancelled', time: '08:45 AM', fare: '₹220', distance: '6.9 km', duration: '16 min' },
    { id: 25, rider: 'Daniel Wilson', driver: 'Rekha Pillai', start: 'Kolkata Airport', end: 'Park Street', status: 'Completed', time: '09:20 AM', fare: '₹380', distance: '12.3 km', duration: '27 min' },
    { id: 26, rider: 'Ashley Davis', driver: 'Biswajit Roy', start: 'Salt Lake', end: 'Howrah Station', status: 'Active', time: '10:35 AM', fare: '₹240', distance: '7.8 km', duration: '18 min' },
    { id: 27, rider: 'Matthew Garcia', driver: 'Priyanka Das', start: 'New Market', end: 'Esplanade', status: 'En Route', time: '11:50 AM', fare: '₹120', distance: '3.4 km', duration: '10 min' },
    { id: 28, rider: 'Lauren Martinez', driver: 'Subhash Ghosh', start: 'Dalhousie', end: 'Sealdah Station', status: 'Waiting', time: '12:25 PM', fare: '₹160', distance: '4.7 km', duration: '13 min' },
    { id: 29, rider: 'Joshua Rodriguez', driver: 'Tanuja Sen', start: 'Chennai Airport', end: 'T Nagar', status: 'Active', time: '01:40 PM', fare: '₹420', distance: '13.1 km', duration: '28 min' },
    { id: 30, rider: 'Samantha Lopez', driver: 'Venkat Raman', start: 'Anna Nagar', end: 'Marina Beach', status: 'Completed', time: '02:55 PM', fare: '₹300', distance: '9.6 km', duration: '22 min' },
    { id: 31, rider: 'Andrew Hernandez', driver: 'Lakshmi Iyer', start: 'Velachery', end: 'Guindy', status: 'En Route', time: '03:10 PM', fare: '₹180', distance: '5.8 km', duration: '15 min' },
    { id: 32, rider: 'Brittany King', driver: 'Murugan Pillai', start: 'Adyar', end: 'Mylapore', status: 'Active', time: '04:25 PM', fare: '₹140', distance: '4.2 km', duration: '11 min' },
    { id: 33, rider: 'Tyler Wright', driver: 'Radha Krishnan', start: 'Jaipur Airport', end: 'Pink City', status: 'Cancelled', time: '05:40 PM', fare: '₹320', distance: '10.1 km', duration: '23 min' },
    { id: 34, rider: 'Megan Scott', driver: 'Gopal Sharma', start: 'Amber Fort', end: 'City Palace', status: 'Completed', time: '06:55 PM', fare: '₹200', distance: '6.3 km', duration: '17 min' },
    { id: 35, rider: 'Brandon Green', driver: 'Sunita Agarwal', start: 'Hawa Mahal', end: 'Jantar Mantar', status: 'Active', time: '07:10 PM', fare: '₹120', distance: '3.7 km', duration: '9 min' },
    { id: 36, rider: 'Stephanie Adams', driver: 'Mahesh Gupta', start: 'Johari Bazaar', end: 'Railway Station', status: 'En Route', time: '08:25 PM', fare: '₹160', distance: '4.9 km', duration: '12 min' },
    { id: 37, rider: 'Jordan Baker', driver: 'Kaveri Reddy', start: 'Ahmedabad Airport', end: 'Sabarmati', status: 'Waiting', time: '09:40 PM', fare: '₹280', distance: '8.7 km', duration: '20 min' },
    { id: 38, rider: 'Kayla Gonzalez', driver: 'Hitesh Patel', start: 'Maninagar', end: 'CG Road', status: 'Active', time: '10:55 PM', fare: '₹220', distance: '7.1 km', duration: '16 min' },
    { id: 39, rider: 'Justin Nelson', driver: 'Nisha Shah', start: 'Vastrapur', end: 'Navrangpura', status: 'Completed', time: '11:10 PM', fare: '₹180', distance: '5.4 km', duration: '14 min' },
    { id: 40, rider: 'Alexis Carter', driver: 'Ravi Joshi', start: 'Satellite', end: 'Paldi', status: 'En Route', time: '12:25 AM', fare: '₹200', distance: '6.2 km', duration: '15 min' },
    { id: 41, rider: 'Nathan Mitchell', driver: 'Pooja Mehta', start: 'Kochi Airport', end: 'Marine Drive', status: 'Active', time: '01:40 AM', fare: '₹380', distance: '11.9 km', duration: '26 min' },
    { id: 42, rider: 'Hannah Perez', driver: 'Suresh Nair', start: 'Fort Kochi', end: 'Mattancherry', status: 'Cancelled', time: '02:55 AM', fare: '₹140', distance: '4.1 km', duration: '10 min' },
    { id: 43, rider: 'Zachary Roberts', driver: 'Bindu Thomas', start: 'Ernakulam', end: 'Kakkanad', status: 'Completed', time: '03:10 AM', fare: '₹260', distance: '8.3 km', duration: '19 min' },
    { id: 44, rider: 'Taylor Turner', driver: 'Jose Mathew', start: 'Edapally', end: 'Aluva', status: 'Active', time: '04:25 AM', fare: '₹180', distance: '5.7 km', duration: '13 min' },
    { id: 45, rider: 'Austin Phillips', driver: 'Latha Menon', start: 'Chandigarh Airport', end: 'Sector 17', status: 'En Route', time: '05:40 AM', fare: '₹240', distance: '7.6 km', duration: '17 min' },
    { id: 46, rider: 'Chloe Campbell', driver: 'Harpreet Singh', start: 'Rock Garden', end: 'Sukhna Lake', status: 'Waiting', time: '06:55 AM', fare: '₹160', distance: '4.8 km', duration: '12 min' },
    { id: 47, rider: 'Sean Parker', driver: 'Jasbir Kaur', start: 'Sector 35', end: 'Panchkula', status: 'Active', time: '07:10 AM', fare: '₹200', distance: '6.4 km', duration: '15 min' },
    { id: 48, rider: 'Natalie Evans', driver: 'Gurdeep Gill', start: 'Mohali', end: 'Phase 10', status: 'Completed', time: '08:25 AM', fare: '₹140', distance: '4.3 km', duration: '11 min' },
    { id: 49, rider: 'Ian Edwards', driver: 'Simran Bhatia', start: 'Indore Airport', end: 'Rajwada', status: 'En Route', time: '09:40 AM', fare: '₹320', distance: '10.2 km', duration: '24 min' },
    { id: 50, rider: 'Jasmine Collins', driver: 'Vikash Tiwari', start: 'Sarafa Bazaar', end: 'Lal Bagh', status: 'Active', time: '10:55 AM', fare: '₹180', distance: '5.6 km', duration: '14 min' },
    { id: 51, rider: 'Kyle Stewart', driver: 'Rashmi Jain', start: 'Palasia', end: 'Vijay Nagar', status: 'Cancelled', time: '11:10 AM', fare: '₹220', distance: '6.8 km', duration: '16 min' },
    { id: 52, rider: 'Vanessa Sanchez', driver: 'Deepak Chouhan', start: 'Treasure Island', end: 'Brilliant Convention', status: 'Completed', time: '12:25 PM', fare: '₹160', distance: '4.9 km', duration: '13 min' },
    { id: 53, rider: 'Cameron Morris', driver: 'Shweta Agrawal', start: 'Bhopal Airport', end: 'New Market', status: 'Active', time: '01:40 PM', fare: '₹280', distance: '8.9 km', duration: '21 min' },
    { id: 54, rider: 'Paige Rogers', driver: 'Ramesh Pandey', start: 'Chowk Bazaar', end: 'Habibganj', status: 'En Route', time: '02:55 PM', fare: '₹240', distance: '7.4 km', duration: '18 min' },
    { id: 55, rider: 'Devin Cook', driver: 'Usha Sharma', start: 'TT Nagar', end: 'MP Nagar', status: 'Waiting', time: '03:10 PM', fare: '₹140', distance: '4.2 km', duration: '10 min' },
    { id: 56, rider: 'Jenna Bailey', driver: 'Mohan Verma', start: 'Bittan Market', end: 'Shahpura', status: 'Active', time: '04:25 PM', fare: '₹180', distance: '5.5 km', duration: '14 min' },
    { id: 57, rider: 'Trevor Rivera', driver: 'Geeta Mishra', start: 'Nagpur Airport', end: 'Sitabuldi', status: 'Completed', time: '05:40 PM', fare: '₹300', distance: '9.3 km', duration: '22 min' },
    { id: 58, rider: 'Courtney Cooper', driver: 'Ashok Wankhede', start: 'Dharampeth', end: 'Civil Lines', status: 'En Route', time: '06:55 PM', fare: '₹160', distance: '4.7 km', duration: '12 min' },
    { id: 59, rider: 'Blake Richardson', driver: 'Sunanda Deshmukh', start: 'Sadar', end: 'Hingna', status: 'Active', time: '07:10 PM', fare: '₹220', distance: '6.9 km', duration: '16 min' },
    { id: 60, rider: 'Mariah Cox', driver: 'Prakash Bhosale', start: 'Wardha Road', end: 'Kamptee', status: 'Cancelled', time: '08:25 PM', fare: '₹280', distance: '8.6 km', duration: '20 min' },
    { id: 61, rider: 'Garrett Ward', driver: 'Madhuri Kulkarni', start: 'Nashik Airport', end: 'College Road', status: 'Active', time: '09:40 PM', fare: '₹240', distance: '7.8 km', duration: '18 min' },
    { id: 62, rider: 'Brooke Torres', driver: 'Santosh Patil', start: 'Gangapur Road', end: 'Panchavati', status: 'Completed', time: '10:55 PM', fare: '₹180', distance: '5.3 km', duration: '13 min' },
    { id: 63, rider: 'Derek Peterson', driver: 'Vandana Joshi', start: 'Trimbak Road', end: 'Cidco', status: 'En Route', time: '11:10 PM', fare: '₹200', distance: '6.1 km', duration: '15 min' },
    { id: 64, rider: 'Haley Gray', driver: 'Dilip Sawant', start: 'Satpur', end: 'Ambad', status: 'Waiting', time: '12:25 AM', fare: '₹160', distance: '4.6 km', duration: '11 min' },
    { id: 65, rider: 'Jared Ramirez', driver: 'Kavita Bhagat', start: 'Aurangabad Airport', end: 'Kranti Chowk', status: 'Active', time: '01:40 AM', fare: '₹280', distance: '8.7 km', duration: '20 min' },
    { id: 66, rider: 'Kaitlyn James', driver: 'Sunil Gaikwad', start: 'Bibi Ka Maqbara', end: 'Connaught Place', status: 'Completed', time: '02:55 AM', fare: '₹140', distance: '4.1 km', duration: '10 min' },
    { id: 67, rider: 'Lucas Watson', driver: 'Rekha Jadhav', start: 'Prozone Mall', end: 'Railway Station', status: 'En Route', time: '03:10 AM', fare: '₹180', distance: '5.4 km', duration: '13 min' },
    { id: 68, rider: 'Mackenzie Brooks', driver: 'Ganesh Pawar', start: 'Garkheda', end: 'Jalna Road', status: 'Active', time: '04:25 AM', fare: '₹220', distance: '6.7 km', duration: '16 min' },
    { id: 69, rider: 'Cole Kelly', driver: 'Shobha Mane', start: 'Solapur Airport', end: 'Budhwar Peth', status: 'Cancelled', time: '05:40 AM', fare: '₹200', distance: '6.2 km', duration: '15 min' },
    { id: 70, rider: 'Leah Sanders', driver: 'Baban Shinde', start: 'Siddheshwar Temple', end: 'Akkalkot Road', status: 'Completed', time: '06:55 AM', fare: '₹160', distance: '4.8 km', duration: '12 min' },
    { id: 71, rider: 'Connor Murphy', driver: 'Sushma Rao', start: 'Visakhapatnam Airport', end: 'Beach Road', status: 'Active', time: '07:10 AM', fare: '₹320', distance: '9.8 km', duration: '23 min' },
    { id: 72, rider: 'Maya Patel', driver: 'Ravi Kumar', start: 'Rushikonda Beach', end: 'Dwaraka Nagar', status: 'En Route', time: '08:25 AM', fare: '₹180', distance: '5.4 km', duration: '14 min' },
    { id: 73, rider: 'Ethan Clark', driver: 'Lakshmi Devi', start: 'MVP Colony', end: 'Gajuwaka', status: 'Completed', time: '09:40 AM', fare: '₹240', distance: '7.2 km', duration: '17 min' },
    { id: 74, rider: 'Sophia Lewis', driver: 'Venkat Reddy', start: 'Madhurawada', end: 'Pendurthi', status: 'Cancelled', time: '10:55 AM', fare: '₹200', distance: '6.1 km', duration: '15 min' },
    { id: 75, rider: 'Mason Walker', driver: 'Padma Latha', start: 'Vijayawada Airport', end: 'Benz Circle', status: 'Active', time: '11:10 AM', fare: '₹280', distance: '8.6 km', duration: '20 min' },
    { id: 76, rider: 'Isabella Hall', driver: 'Srinivas Rao', start: 'Governorpet', end: 'Patamata', status: 'Waiting', time: '12:25 PM', fare: '₹140', distance: '4.3 km', duration: '11 min' },
    { id: 77, rider: 'Logan Allen', driver: 'Manjula Devi', start: 'Labbipet', end: 'Gunadala', status: 'En Route', time: '01:40 PM', fare: '₹160', distance: '4.9 km', duration: '13 min' },
    { id: 78, rider: 'Ava Young', driver: 'Ramesh Babu', start: 'Kanuru', end: 'Nunna', status: 'Active', time: '02:55 PM', fare: '₹220', distance: '6.7 km', duration: '16 min' },
    { id: 79, rider: 'Jackson King', driver: 'Kavitha Reddy', start: 'Guntur Airport', end: 'Brodipet', status: 'Completed', time: '03:10 PM', fare: '₹300', distance: '9.1 km', duration: '22 min' },
    { id: 80, rider: 'Mia Wright', driver: 'Naresh Kumar', start: 'Arundelpet', end: 'Kothapet', status: 'En Route', time: '04:25 PM', fare: '₹180', distance: '5.6 km', duration: '14 min' },
    { id: 81, rider: 'Aiden Lopez', driver: 'Sunitha Rani', start: 'Ponnur', end: 'Tenali', status: 'Active', time: '05:40 PM', fare: '₹250', distance: '7.8 km', duration: '18 min' },
    { id: 82, rider: 'Charlotte Hill', driver: 'Mohan Rao', start: 'Mangalagiri', end: 'Tadepalli', status: 'Cancelled', time: '06:55 PM', fare: '₹160', distance: '4.7 km', duration: '12 min' },
    { id: 83, rider: 'Lucas Scott', driver: 'Priya Kumari', start: 'Tirupati Airport', end: 'Temple', status: 'Active', time: '07:10 PM', fare: '₹380', distance: '11.4 km', duration: '26 min' },
    { id: 84, rider: 'Amelia Green', driver: 'Balaji Reddy', start: 'Tirumala', end: 'Chandragiri', status: 'Completed', time: '08:25 PM', fare: '₹420', distance: '12.8 km', duration: '29 min' },
    { id: 85, rider: 'Oliver Adams', driver: 'Vasantha Devi', start: 'Renigunta', end: 'Puttur', status: 'En Route', time: '09:40 PM', fare: '₹200', distance: '6.3 km', duration: '15 min' },
    { id: 86, rider: 'Harper Baker', driver: 'Krishna Murthy', start: 'Chittoor', end: 'Madanapalle', status: 'Waiting', time: '10:55 PM', fare: '₹340', distance: '10.2 km', duration: '24 min' },
    { id: 87, rider: 'Elijah Gonzalez', driver: 'Radha Rani', start: 'Nellore Airport', end: 'Trunk Road', status: 'Active', time: '11:10 PM', fare: '₹260', distance: '8.1 km', duration: '19 min' },
    { id: 88, rider: 'Evelyn Nelson', driver: 'Suresh Reddy', start: 'Vedayapalem', end: 'Stonehousepet', status: 'Completed', time: '12:25 AM', fare: '₹140', distance: '4.2 km', duration: '10 min' },
    { id: 89, rider: 'James Carter', driver: 'Latha Kumari', start: 'Kavali', end: 'Atmakur', status: 'En Route', time: '01:40 AM', fare: '₹180', distance: '5.5 km', duration: '13 min' },
    { id: 90, rider: 'Abigail Mitchell', driver: 'Venkateswara Rao', start: 'Ongole', end: 'Chirala', status: 'Active', time: '02:55 AM', fare: '₹220', distance: '6.9 km', duration: '16 min' },
    { id: 91, rider: 'Benjamin Perez', driver: 'Saraswathi Devi', start: 'Rajahmundry Airport', end: 'Danavaipeta', status: 'Cancelled', time: '03:10 AM', fare: '₹280', distance: '8.7 km', duration: '20 min' },
    { id: 92, rider: 'Emily Roberts', driver: 'Ramana Rao', start: 'Kakinada', end: 'Samalkota', status: 'Completed', time: '04:25 AM', fare: '₹200', distance: '6.4 km', duration: '15 min' },
    { id: 93, rider: 'William Turner', driver: 'Hymavathi Devi', start: 'Amalapuram', end: 'Razole', status: 'Active', time: '05:40 AM', fare: '₹160', distance: '4.8 km', duration: '12 min' },
    { id: 94, rider: 'Madison Phillips', driver: 'Siva Kumar', start: 'Eluru', end: 'Bhimavaram', status: 'En Route', time: '06:55 AM', fare: '₹240', distance: '7.6 km', duration: '18 min' },
    { id: 95, rider: 'Alexander Campbell', driver: 'Jyothi Rani', start: 'Tanuku', end: 'Narasapuram', status: 'Waiting', time: '07:10 AM', fare: '₹180', distance: '5.3 km', duration: '13 min' },
    { id: 96, rider: 'Avery Parker', driver: 'Chandra Sekhar', start: 'Machilipatnam', end: 'Gudivada', status: 'Active', time: '08:25 AM', fare: '₹220', distance: '6.8 km', duration: '16 min' },
    { id: 97, rider: 'Henry Evans', driver: 'Kamala Devi', start: 'Tenali', end: 'Repalle', status: 'Completed', time: '09:40 AM', fare: '₹200', distance: '6.2 km', duration: '15 min' },
    { id: 98, rider: 'Ella Edwards', driver: 'Prasad Rao', start: 'Bapatla', end: 'Chirala', status: 'En Route', time: '10:55 AM', fare: '₹160', distance: '4.9 km', duration: '12 min' },
    { id: 99, rider: 'Sebastian Collins', driver: 'Anitha Kumari', start: 'Markapur', end: 'Giddalur', status: 'Active', time: '11:10 AM', fare: '₹180', distance: '5.7 km', duration: '14 min' },
    { id: 100, rider: 'Grace Stewart', driver: 'Ravi Teja', start: 'Kurnool Airport', end: 'Adoni', status: 'Cancelled', time: '12:25 PM', fare: '₹300', distance: '9.4 km', duration: '22 min' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'En Route': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };



  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Rides Management</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => setViewMode('table')}
            className={`px-4 py-2 rounded-lg ${viewMode === 'table' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Table View
          </button>
          <button 
            onClick={() => setViewMode('map')}
            className={`px-4 py-2 rounded-lg ${viewMode === 'map' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Map View
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input type="text" placeholder="Search rides..." className="border rounded-lg px-3 py-2" />
          <input type="date" className="border rounded-lg px-3 py-2" />
          <select className="border rounded-lg px-3 py-2">
            <option>All Status</option>
            <option>Active</option>
            <option>Completed</option>
            <option>Cancelled</option>
            <option>En Route</option>
          </select>
          <select className="border rounded-lg px-3 py-2">
            <option>All Regions</option>
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Filter
          </button>
        </div>
      </div>

      {viewMode === 'table' ? (
        /* Table View */
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rider</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Route</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Distance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fare</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rides.map((ride) => (
                <tr key={ride.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{ride.rider}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{ride.driver}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{ride.start} → {ride.end}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(ride.status)}`}>
                      {ride.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{ride.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{ride.distance}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{ride.fare}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                    <button className="text-green-600 hover:text-green-800 mr-3">Track</button>
                    <button className="text-red-600 hover:text-red-800">Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* Map View */
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-gray-600">Map View - Rides displayed as pins/clusters</p>
              <p className="text-sm text-gray-500 mt-2">Integration with mapping service required</p>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Rides;