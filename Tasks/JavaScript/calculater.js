no1_in = document.getElementById('no1');
        no2_in = document.getElementById('no2');
        add_bt = document.getElementById('add');
        sub_bt = document.getElementById('sub');
        mul_bt = document.getElementById('mul');
        div_bt = document.getElementById('div');
        mod_bt = document.getElementById('mod');

        console.log(no1_in.value);
        function add() {
            add_bt.innerHTML = no1_in.value + no2_in.value;
        }
        function sub() {
            sub_bt.innerHTML = no1_in.value - no2_in.value;
        }
        function mul() {
            mul_bt.innerHTML = no1_in.value * no2_in.value;
        }
        function div() {
            div_bt.innerHTML = no1_in.value / no2_in.value;
        }
        function mod() {
            mod_bt.innerHTML = no1_in.value % no2_in.value;
        }