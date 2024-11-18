<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Componentes Eletrônicos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
        }

        h1 {
            color: #333;
            margin-top: 20px;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin: 20px;
        }

        .item {
            width: 250px;
            text-align: center;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 15px;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .item img {
            width: 100%;
            height: auto;
            border-radius: 10px;
        }

        .item h2 {
            font-size: 18px;
            margin: 10px 0;
            color: #555;
        }

        .item:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        /* Modal */
        .modal {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            width: 80%;
            max-width: 500px;
            padding: 20px;
            z-index: 1000;
        }

        .modal h2 {
            margin-top: 0;
        }

        .modal p {
            color: #666;
        }

        .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }

        .close-btn {
            margin-top: 20px;
            padding: 10px 20px;
            background: #333;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .close-btn:hover {
            background: #555;
        }
    </style>
</head>
<body>
    <h1>Componentes Eletrônicos</h1>
    <p>Clique em um componente para saber mais.</p>

    <div class="container">
        <!-- Protoboard -->
        <div class="item" data-title="Protoboard" data-description="Um protoboard é usado para montar circuitos eletrônicos sem solda. Ele facilita experimentos e prototipagem rápida.">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Breadboard_with_components.jpg" alt="Protoboard">
            <h2>Protoboard</h2>
        </div>

        <!-- Resistores -->
        <div class="item" data-title="Resistores" data-description="Os resistores limitam a corrente elétrica e ajustam os níveis de tensão em circuitos eletrônicos. Cada cor na sua faixa representa seu valor de resistência.">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Resistors.jpg" alt="Resistores">
            <h2>Resistores</h2>
        </div>

        <!-- LEDs -->
        <div class="item" data-title="LEDs" data-description="LEDs (Diodos Emissores de Luz) convertem energia elétrica em luz e são usados em indicadores, iluminação e displays.">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/LED_Bulbs.jpg" alt="LEDs">
            <h2>LEDs</h2>
        </div>

        <!-- Cabos Jumper -->
        <div class="item" data-title="Cabos Jumper" data-description="Cabos jumper conectam diferentes partes de um circuito em protoboards ou entre dispositivos eletrônicos.">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Jumper_wires.jpg" alt="Cabos Jumper">
            <h2>Cabos Jumper</h2>
        </div>

        <!-- Cabo de Impressora -->
        <div class="item" data-title="Cabo de Impressora" data-description="O cabo de impressora (USB-B) conecta dispositivos como impressoras e placas Arduino a computadores para transferência de dados e energia.">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/USB_Type-B_cable.jpg" alt="Cabo de Impressora">
            <h2>Cabo de Impressora</h2>
        </div>
    </div>

    <!-- Modal -->
    <div class="overlay" id="overlay"></div>
    <div class="modal" id="modal">
        <h2 id="modal-title"></h2>
        <p id="modal-description"></p>
        <button class="close-btn" id="close-btn">Fechar</button>
    </div>

    <script>
        // Selecionar elementos
        const items = document.querySelectorAll('.item');
        const modal = document.getElementById('modal');
        const overlay = document.getElementById('overlay');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const closeBtn = document.getElementById('close-btn');

        // Mostrar o modal com informações
        items.forEach(item => {
            item.addEventListener('click', () => {
                const title = item.getAttribute('data-title');
                const description = item.getAttribute('data-description');
                modalTitle.textContent = title;
                modalDescription.textContent = description;
                modal.style.display = 'block';
                overlay.style.display = 'block';
            });
        });

        // Fechar o modal
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            overlay.style.display = 'none';
        });

        overlay.addEventListener('click', () => {
            modal.style.display = 'none';
            overlay.style.display = 'none';
        });
    </script>
</body>
</html>
