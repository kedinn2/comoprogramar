---
layout: post
title: Calculadora en Java + Código
date: 2013-04-06 04:26:17
categories: general
tags: [java]
---
<p style="text-align: center;"><strong>Crearemos una calculara sin interfaz y otra con interfaz </strong></p>
<h3>Calculadora básica para novatos sin interfaz :D</h3>
<p style="text-align: left;">Elaborando una calculadora donde ingresaremos dos numero y realizara las operaciones de sumar,restas ,multiplicar y dividir.</p>

<pre class="prettyprint">import javax.swing.*;

public class Menu {

    public static void main(String []agrs)
    {
        int op=0;
        double n1,n2,s,m,d,r;
        do{
            op=Integer.parseInt(JOptionPane.showInputDialog("nCalculadoran"+
            "************n"+
            "[1] SUMARn"+
            "[2] RESTARn"+
            "[3] MULTIPLICARn"+
            "[4] DIVIDIRn"+
            "[5] SALIRn"+
            "Ingresa una opcion:"));

            switch(op)
            {
                case 1:
                    n1=Double.parseDouble(JOptionPane.showInputDialog("Ingrese numero 1"));
                    n2=Double.parseDouble(JOptionPane.showInputDialog("Ingrese numero 2"));
                    s=n1+n2;
                    JOptionPane.showMessageDialog(null,"La suma es:"+s);
                    break;
                case 2:
                    n1=Double.parseDouble(JOptionPane.showInputDialog("Ingrese numero 1"));
                    n2=Double.parseDouble(JOptionPane.showInputDialog("Ingrese numero 2"));
                    r=n1-n2;
                    JOptionPane.showMessageDialog(null,"La resta es:"+r);
                    break;
                case 3:
                    n1=Double.parseDouble(JOptionPane.showInputDialog("Ingrese numero 1"));
                    n2=Double.parseDouble(JOptionPane.showInputDialog("Ingrese numero 2"));
                    m=n1*n2;
                    JOptionPane.showMessageDialog(null,"La multiplicacion es:"+m);
                    break;
                case 4:
                    n1=Double.parseDouble(JOptionPane.showInputDialog("Ingrese numero 1"));
                    n2=Double.parseDouble(JOptionPane.showInputDialog("Ingrese numero 2"));
                    d=n1/n2;
                    JOptionPane.showMessageDialog(null,"La division es:"+d);
                    break;

            }
        }while(op!=5);
    }

}</pre>
<h3 style="text-align: center;"></h3>
<h3 style="text-align: center;">Calculadora con Interfaz en Java</h3>
<p>Anteriormente he compartido un ejemplo de una calculadora básica usando los cuadros de dialogo en java, la cual es un poco tediosa al momento de realizar las operaciones, pero en post mostrare algo mas grafico, usando lo que se ha explicado en las anteriores entradas: Crear ventanas, Botones, Formularios básicos, JPaneles y arreglos de botones.</p>
<p>El proyecto esta dividido en dos partes, una el cual contiene el método principal, y la otra clase contiene la interfaz, eventos y operaciones realizadas por el ejercicio practico. El programilla realiza las cuatro operaciones básicas de las matemáticas (suma, resta, multiplicación y división), ademas cuenta con el uso de memorias, borrado total (pantalla y memoria) raíz cuadrada, y manejo de decimales. Bueno ya sabiendo que realiza el ejercicio, continuare mostrando el código para la aplicación.</p>
<p><strong>- CLASE MAIN...</strong></p>
<pre class="prettyprint">import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;

public class CalculadoraGUI {

    public static void main(String[] args) {
         String ax = System.getProperty("os.name"); //variable que toma el nombre del sistema operativo que se tenga instalado

        if(ax.equals("Windows 7") || ax.equals("Windows")){//si es un sistema windows se aplica el skin que tiene java para windows
            try {
            UIManager.setLookAndFeel("com.sun.java.swing.plaf.windows.WindowsLookAndFeel");
            interfaz w = new interfaz();
            // TODO code application logic here
            } catch (ClassNotFoundException ex) {
                Logger.getLogger(interfaz.class.getName()).log(Level.SEVERE, null, ex);
            } catch (InstantiationException ex) {
                Logger.getLogger(interfaz.class.getName()).log(Level.SEVERE, null, ex);
            } catch (IllegalAccessException ex) {
                Logger.getLogger(interfaz.class.getName()).log(Level.SEVERE, null, ex);
            } catch (UnsupportedLookAndFeelException ex) {
                Logger.getLogger(interfaz.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        if(ax.equals("Linux")){//si es un sistema linux se aplica el skin que tiene java para linux
            try {
            UIManager.setLookAndFeel("com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel");
            interfaz w = new interfaz();
                // TODO code application logic here
            } catch (ClassNotFoundException ex) {
                Logger.getLogger(interfaz.class.getName()).log(Level.SEVERE, null, ex);
            } catch (InstantiationException ex) {
                Logger.getLogger(interfaz.class.getName()).log(Level.SEVERE, null, ex);
            } catch (IllegalAccessException ex) {
                Logger.getLogger(interfaz.class.getName()).log(Level.SEVERE, null, ex);
            } catch (UnsupportedLookAndFeelException ex) {
                Logger.getLogger(interfaz.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
}</pre>
<p><strong>- CLASE INTERFAZ...</strong></p>
<pre class="prettyprint">import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Font;
import java.awt.Insets;
import java.awt.Panel;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class interfaz implements ActionListener{

    JTextField jt1, jt2;
    Panel pN, pb1, pb3;
    JPanel pS, pb2;
    JButton mc, mr, ms, mMas, mMenos, numeros[], operaciones[];
    String oper[]={"R", "C", "+", "/", "-" ,"*", "="},  ax="";
    float n1, n2, nr, M;//variables para las operaciones
    int tipOp; //para controlar el tipo de operacion que se realiza
    boolean t=false;//control sobre escribir un nuevo numero despues de alguna operacion cambia a true cuando se ha realizado una operacion

    public interfaz(){

        JFrame jfMain = new JFrame("Calculator");
        jfMain.setLayout(new BorderLayout(4, 4));

        norte();
        sur();

        jfMain.add(pN, BorderLayout.NORTH);
        jfMain.add(pS, BorderLayout.CENTER);

        jfMain.setLocation(100, 80);
        jfMain.setResizable(false);
        jfMain.setVisible(true);
        jfMain.setSize(300, 380);
        jfMain.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public void norte(){

        pN = new Panel(null);        

        jt1 = new JTextField("");
        jt2 = new JTextField("0");

        jt1.setHorizontalAlignment(JTextField.RIGHT); 
        jt2.setHorizontalAlignment(JTextField.RIGHT); 

        //Quitar bordes a los campos de texto
        jt1.setBorder(BorderFactory.createLineBorder(Color.white));
        jt2.setBorder(BorderFactory.createLineBorder(Color.white));

        //desabilitando los campos de texto
        jt1.setEditable(false);
        jt2.setEditable(false);

        jt1.setBackground(Color.white);
        jt2.setBackground(Color.white);

        pN.add(jt1); pN.add(jt2);

        jt1.setBounds(35, 10, 200, 15);
        jt2.setBounds(35, 25, 200, 30);

        pN.setSize(270, 47);
        pN.setVisible(true);

    }

    public void sur(){

        pS = new JPanel(new BorderLayout(6, 50));
        pS.setLayout(new BorderLayout(4, 4));

        botMem();
        botNum();
        botOpe();

        pS.add(pb1, BorderLayout.NORTH);  
        pS.add(pb2, BorderLayout.CENTER); 
        pS.add(pb3, BorderLayout.EAST); 

        pS.setSize(270, 330);
    }

    public void botMem(){

        pb1 = new Panel(null);

        mc = new JButton("MC");  mr = new JButton("MR");
        ms = new JButton("MS"); mMas = new JButton("M+");
        mMenos = new JButton("M-");

        mc.setFont(new Font("Arial", Font.BOLD, 11));
        mr.setFont(new Font("Arial", Font.BOLD, 11));
        ms.setFont(new Font("Arial", Font.BOLD, 11));
        mMas.setFont(new Font("Arial", Font.BOLD, 11));
        mMenos.setFont(new Font("Arial", Font.BOLD, 11));

        mc.setMargin(new Insets(1, 1, 1, 1)); mr.setMargin(new Insets(1, 1, 1, 1));
        ms.setMargin(new Insets(1, 1, 1, 1)); mMas.setMargin(new Insets(1, 1, 1, 1));
        mMenos.setMargin(new Insets(1, 1, 1, 1)); 

        mc.setBounds(35, 0, 33, 33); mr.setBounds(78, 0, 33, 33); ms.setBounds(121, 0, 33, 33);
        mMas.setBounds(164, 0, 33, 33); mMenos.setBounds(207, 0, 33, 33);

        pb1.add(mc); pb1.add(mr); pb1.add(ms); pb1.add(mMas); pb1.add(mMenos);

        mc.addActionListener(this); mr.addActionListener(this); ms.addActionListener(this);
        mMas.addActionListener(this); mMenos.addActionListener(this);

        pb1.setSize(270, 45);
        pb1.setVisible(true);        
    }

    public void botNum(){

        pb2 = new JPanel(null);

        int nx3=121, nx2=121, nx1=121, n3y=0, n2y=43, n1y=86;
        numeros = new JButton[11];

        //*****************************************
        //bloque para crear los botones, añadirlos y asignar numeros
        for (int i=0; i&lt;=10; i++){

            if(i&lt;=9){
                numeros[i] = new JButton(""+i);
                pb2.add(numeros[i]);
                numeros[i].setMargin(new Insets(1, 1, 1, 1));
                numeros[i].addActionListener(this);  
            }
            else{
                numeros[i] = new JButton(".");
                pb2.add(numeros[i]);
                numeros[i].setMargin(new Insets(1, 1, 1, 1));
                numeros[i].addActionListener(this);
            }
        }

        //******************************************
        //bloque para posicionar botones
        for(int i=10; i&gt;=0; i--){

            if(i==10){
                numeros[i].setBounds(121, 129, 35, 35);
            }
            else{
                if(i&lt;=9 &amp;&amp; i&gt;=7){
                    numeros[i].setBounds(nx3, n3y, 35, 35);
                    nx3-=43;
                }
                else if(i&lt;=6 &amp;&amp; i&gt;=4){   
                    n3y+=43;                    
                    numeros[i].setBounds(nx2, n2y, 35, 35);
                    nx2-=43;
                }
                else if(i&lt;=3 &amp;&amp; i&gt;=1){
                    n3y+=43;                    
                    numeros[i].setBounds(nx1, n1y, 35, 35);
                    nx1-=43;
                }
                else if(i==0){
                    numeros[i].setBounds(35, 129, 78, 35);                    
                }
            }                
        }

        pb2.setSize(170, 150);
        pb2.setVisible(true);
    }

    public void botOpe(){

        pb3 = new Panel(null);

        int c=0, x=0, y=0;

        operaciones = new JButton[7];

        for(int i=0; i&lt;=6; i++){
            if(c&lt;=1){

                operaciones[i] = new JButton(oper[i]);
                pb3.add(operaciones[i]);

                    operaciones[i].setBounds(x, y, 30, 35);

                    operaciones[i].setMargin(new Insets(1, 1, 1, 1));
                    operaciones[i].addActionListener(this);
                    x+=33;
                    c++;               
            }
            else{
                if(i==6){
                    x=0; y+=43;
                    operaciones[i] = new JButton(oper[i]);
                    pb3.add(operaciones[i]);

                    operaciones[i].setBounds(x, y, 65, 35);

                    operaciones[i].setMargin(new Insets(1, 1, 1, 1));
                    operaciones[i].addActionListener(this);
                    x+=33;
                    c++;
                }
                else{
                    c=0;
                    x=0; y+=43;
                    operaciones[i] = new JButton(oper[i]);
                    pb3.add(operaciones[i]);

                    operaciones[i].setBounds(x, y, 30, 35);

                    operaciones[i].setMargin(new Insets(1, 1, 1, 1));
                    operaciones[i].addActionListener(this);
                    x+=33;
                    c++;   
                }                             
            }                

        }

        pb3.setVisible(true);
        pb3.setSize(120, 200);
    }

    public boolean isN(String ax){

        try{
            int n = Integer.parseInt(ax);
            return true;
        }catch(NumberFormatException e){
            return false;
        }

    }

    @Override
    public void actionPerformed(ActionEvent e) {

        String  op="";

        if(isN(e.getActionCommand())){ //cuando se oprimen numeros

            if(jt1.getText().equals("")){
                ax += e.getActionCommand();
                jt2.setText(ax);
            }
            else{
                if(tipOp==0){
                    if(t){
                        ax=""; 

                        jt1.setText(jt2.getText());                        
                        ax += e.getActionCommand();
                        jt2.setText(ax);    
                        t = false;
                    }
                    else{
                        ax="";
                        ax += jt2.getText()+e.getActionCommand();
                        jt2.setText(ax);
                    }                
                }else{
                    ax="";
                    ax += jt2.getText()+e.getActionCommand();
                    jt2.setText(ax);
                }
            }            
        }
        else{//cuando se oprime el resto de botones

            if(e.getActionCommand().equals("R") ){
                jt1.setText("");
                Float a = Float.parseFloat(jt2.getText());
                jt2.setText(""+Math.sqrt(a)); 
            }
            if(e.getActionCommand().equals("C") ){ //para reiniciar valores y limpiar pantalla
                tipOp=0; n1 = 0; n2 =0; nr=0; jt1.setText(""); jt2.setText("0"); ax="";
            }   
            if(e.getActionCommand().equals("MC")){//para limpiar la memoria de la calculadora
                ms.setForeground(Color.black);
                jt1.setText(""); jt2.setText("0");
                M=0;
            }
            if(e.getActionCommand().equals("MR")){//para mostrar valor almacenado en la memoria
                jt1.setText("");
                jt2.setText(String.valueOf(M));
            }if(e.getActionCommand().equals("MS")){//guardar un valor en la memoria
                ms.setForeground(Color.red);
                M = Float.parseFloat(jt2.getText());
            }
            if(e.getActionCommand().equals("M+")){//sumar valor de la pantalla con el valor de la memoria
                M += Float.parseFloat(jt2.getText());
            }
            if(e.getActionCommand().equals("M-")){//restar valor de la pantalla con el valor de la memoria
                M -= Float.parseFloat(jt2.getText());
            }    
            if(e.getActionCommand().equals(".")){//usar el punto para los decimales
                ax="";
                if(numeros[10].isEnabled()){
                    numeros[10].setEnabled(false);
                    ax = jt2.getText() +".";
                    jt2.setText(ax);
                }
            }
            if(e.getActionCommand().equals("+") ){//boton suma
                numeros[10].setEnabled(true);
                ax="";
                if(tipOp==1){

                }else if(tipOp==0 ){//validacion para no chocar con otras operaciones
                        if(jt1.getText().equals("") ){
                            n1 = Float.parseFloat(jt2.getText());                    
                            ax += jt1.getText()+jt2.getText();
                            jt1.setText(ax+" + ");
                            jt2.setText("");
                            tipOp = 1;
                        }
                        else {
                            if(!t){//validacion para nueva operacion
                                n1 = Float.parseFloat(jt2.getText());                    
                                ax += jt2.getText();
                                jt1.setText(ax+" + ");
                                jt2.setText("");
                                tipOp = 1;
                            }
                            else{//usar otras operaciones con la suma
                                n1 = Float.parseFloat(jt2.getText());                    
                                ax += jt1.getText();
                                jt1.setText(ax+" + ");
                                jt2.setText("");
                                tipOp = 1;
                            }
                        }
                    }                     
             }
                if(e.getActionCommand().equals("-") ){//cuando se decide restar
                    numeros[10].setEnabled(true);
                    ax="";
                    if(tipOp==2){

                    }else if(tipOp==0){//validacion para no chocar con otras operaciones
                        if(jt1.getText().equals("")){
                            n1 = Float.parseFloat(jt2.getText());                    
                            ax += jt1.getText()+ jt2.getText();
                            jt1.setText(ax+" - ");
                            jt2.setText("");
                            tipOp = 2;
                        }
                        else{
                            if(!t){//validacion para nueva operacion
                                n1 = Float.parseFloat(jt2.getText());                    
                                ax += jt2.getText();
                                jt1.setText(ax+" - ");
                                jt2.setText("");
                                tipOp = 2;
                            }
                            else{//usar otras operaciones con la suma
                                n1 = Float.parseFloat(jt2.getText());                    
                                ax += jt1.getText();
                                jt1.setText(ax+" - ");
                                jt2.setText("");
                                tipOp = 2;
                            }
                        }
                    }                    
                }
                if(e.getActionCommand().equals("*") ){//cuando se decide multiplicar
                    numeros[10].setEnabled(true);
                    ax="";
                    if(tipOp==3){

                    }else if(tipOp==0){//validacion para no chocar con otras operaciones
                        if(jt1.getText().equals("")){
                            n1 = Float.parseFloat(jt2.getText());                    
                            ax += jt1.getText()+jt2.getText();
                            jt1.setText(ax+" * ");
                            jt2.setText("");
                            tipOp = 3;
                        }
                        else{
                            if(!t){//validacion para nueva operacion
                                n1 = Float.parseFloat(jt2.getText());                    
                                ax += jt2.getText();
                                jt1.setText(ax+" * ");
                                jt2.setText("");
                                tipOp = 3;
                            }
                            else{//usar otras operaciones con la suma
                                n1 = Float.parseFloat(jt2.getText());                    
                                ax += jt1.getText();
                                jt1.setText(ax+" * ");
                                jt2.setText("");
                                tipOp = 3;
                            }
                        }
                    }                      
                }
                if(e.getActionCommand().equals("/") ){//cuando se decide dividir
                    numeros[10].setEnabled(true);
                    ax="";
                    if(tipOp==4){

                    }else if(tipOp==0){//validacion para no chocar con otras operaciones
                        if(jt1.getText().equals("")){
                            n1 = Float.parseFloat(jt2.getText());                    
                            ax += jt1.getText()+jt2.getText();
                            jt1.setText(ax+" / ");
                            jt2.setText("");
                            tipOp = 4;
                        }
                        else{
                            if(!t){//validacion para nueva operacion
                                n1 = Float.parseFloat(jt2.getText());                    
                                ax += jt2.getText();
                                jt1.setText(ax+" / ");
                                jt2.setText("");
                                tipOp = 4;
                            }
                            else{//usar otras operaciones con la suma
                                n1 = Float.parseFloat(jt2.getText());                    
                                ax += jt1.getText();
                                jt1.setText(ax+" / ");
                                jt2.setText("");
                                tipOp = 4;
                            }
                        }
                    }                      
                }
                if(e.getActionCommand().equals("=") &amp;&amp; !jt2.getText().equals("")){
                    t = true;
                    if(tipOp==1){//operacion para la suma
                        tipOp = 0;
                        ax="";
                        ax+=jt1.getText() + jt2.getText();
                        jt1.setText(ax);
                        n2 = Float.parseFloat(jt2.getText());
                        nr=n1+n2;
                        jt2.setText(String.valueOf(nr));
                    }
                    else if(tipOp==2){ //operacion para la resta
                        tipOp = 0;
                        ax="";
                        ax+=jt1.getText()+jt2.getText();
                        jt1.setText(ax);
                        n2 = Float.parseFloat(jt2.getText());
                        nr=n1-n2;
                        jt2.setText(String.valueOf(nr));
                    }
                    if(tipOp==3){ //operacion para la multiplicacion
                        tipOp = 0;
                        ax="";
                        ax+=jt1.getText()+jt2.getText();
                        jt1.setText(ax);
                        n2 = Float.parseFloat(jt2.getText());
                        nr=n1*n2;
                        jt2.setText(String.valueOf(nr));
                    }
                    if(tipOp==4){ //operacion para la multiplicacion
                        if(Float.parseFloat(jt2.getText())!=0){
                            tipOp = 0;
                            ax="";
                            ax+=jt1.getText()+jt2.getText();
                            jt1.setText(ax);
                            n2 = Float.parseFloat(jt2.getText());
                            nr=n1/n2;
                            jt2.setText(String.valueOf(nr));
                        }
                        else
                            JOptionPane.showMessageDialog(null, "No se puede realizar divison por 0");
                    }
                }
        }        
    }       
}</pre>
<p>Una vez ejecutada la aplicación veremos lo siguiente:</p>
<p><img class="aligncenter size-full wp-image-8273" src="/assets/calculadora-con-interfaz.png" alt="calculadora-con-interfaz" width="313" height="391" /></p>
<p>La segunda clase es larga, ya que en esta se realizaron varias validaciones, como también al momento de realizar las operaciones, el ejercicio se trato de realizar lo mas <strong>parecido </strong>posible a la <strong>calculadora de Windows</strong>. Espero que les sirva.</p>
<p>Fuente: <a href="https://answers.yahoo.com/question/index?qid=20130130090559AAMtZYT" target="_blank">yahoo</a></p>
