export default {
    data() {
        return {
            select:false,
            selectE:false,
            selectP:false,
            rol:{
                r1:'Estudiante', r2:'Profesor'
            },
            sedes:{
                s1:'Bucaramanga',
                s2:'Bogota',
                s3:'Medellin',
                s4:'Mexico'
            },
            // -------------------------------------------
            nombreProfesor: '',
            telefonoProfesor:'',
            teamsProfesor:'',
            teams:{
                dia:'',
                hora:'',
                salones:''
            },
            email:'',
            // -------------------------------------------
            nombreEstudiante: '',
            Lista:[]




        }
    },
    methods: {
        ingresarDatosP() {
            const profesor ={
                nombreProfesor: this.nombreProfesor,
                telefonoProfesor: this.telefonoProfesor,
                teamsProfesor: this.teamsProfesor,
                teams: this.teams.dia,
                teams: this.teams.hora,
                teams: this.teams.salones
            }
            this.Lista.push(profesor)
            this.nombreProfesor = ''
            this.telefonoProfesor =''
            console.log(this.Lista);
        },
        ocultar(select){
            if (this.select == select ) {
                this.select = true;
                console.log(this.select);
            }
            if (this.select == 'Estudiante') {
                console.log('hola');
                this.selectE = true;
                this.selectP = false
                
                
            }
            if (this.select == 'Profesor') {
                console.log('hola12');
                this.selectP = true;
                this.selectE = false
                
                
            }
        }
    }
}