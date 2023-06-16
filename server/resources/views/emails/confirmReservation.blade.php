<!DOCTYPE html>
<html>

<head>
    <title>The Golden Fork</title>
    <style>
        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        li {
            margin-bottom: 10px;
        }

        label {
            font-weight: bold;
            color: #ed9100;
            font-size: 1.25rem;
        }

        body {
            width: 100%;
            height: 100%;
            background-color: #0f0a06;
            padding: 5%;
            gap: 28px;
            padding-top: 16px;
            color: #fff;
            font-family: Arial, sans-serif;
        }

        h1 {
            color: #ed9100;
            font-size: 3rem;
            text-align: center
        }

        .glow {
            text-shadow: 0 0 20px rgba(237, 145, 0, 1);
        }

        .container {
            width: 75%;
            gap: 3rem;
        }

        .name {
            color: #ed9100;
        }

        h3 {
            font-size: 2rem;
        }

        p {
            font-size: 1.25rem;
        }

        .info {
            font-size: 1.5rem;
        }

        button {
            border: none;
            background-color: transparent;
            font-size: 1.25rem;
            font-weight: 700;
            color: #ed9100;
            cursor: pointer;
        }

        button:hover {
            text-decoration: underline;
        }

        form {
            margin-left: 50%;
            margin-right: auto;
            width: 50%;
        }
    </style>
</head>

<body>
    <h1 class="glow">The Golden Fork</h1>
    <div class="container">
        <h3>Dear <span class="name">{{ $data['name'] }}</span></h3>

        <p>
            We have just received your wished request of booking a reservation at
            The Golden Fork Restaurant, please confirm its information:
        </p>

        <ul>
            <li>
                <label>Reservation Date:</label>
                <span class="info">{{ $data['reservation_date'] }}</span>
            </li>
            <li>
                <label>Reservation Time:</label>
                <span class="info">{{ $data['reservation_time'] }}</span>
            </li>
            <li>
                <label>Number of People:</label>
                <span class="info">{{ $data['number_of_people'] }}</span>
            </li>
        </ul>

        <form action={{ route('reserve') }} method="post">
            @csrf

            <input type="hidden" name="id" value={{ $data['id'] }}>
            <button>Confirm My Reservation</button>
        </form>
    </div>
</body>

</html>
