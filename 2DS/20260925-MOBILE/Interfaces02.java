import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;


public class Interfaces02 extends JFrame implements ActionListener

{

        JButton bt_Sair, bt_Novo, bt_Amarelo, bt_Vermelho, bt_Verde,bt_Branco,bt_rosa;

        JPanel Painel_Sul = new JPanel(new FlowLayout(FlowLayout.CENTER));

        JPanel Painel_Oeste = new JPanel(new GridLayout(5, 1));

        

        public Interfaces02()

        {

                getContentPane().setBackground(Color.BLACK);


                getContentPane().setLayout(new BorderLayout());

                getContentPane().add(BorderLayout.SOUTH, Painel_Sul = new JPanel());

                getContentPane().add(BorderLayout.WEST, Painel_Oeste);

                Painel_Oeste.add(bt_Amarelo  = new JButton()); 

                bt_Amarelo.setBackground(Color.YELLOW);

                Painel_Oeste.add(bt_Vermelho  = new JButton()); 

                bt_Vermelho.setBackground(Color.RED);

                Painel_Oeste.add(bt_Verde  = new JButton()); 

                bt_Verde.setBackground(Color.GREEN);

                Painel_Oeste.add(bt_Branco  = new JButton()); 

                bt_Branco.setBackground(Color.white);

                 Painel_Oeste.add(bt_rosa  = new JButton()); 

                bt_rosa.setBackground(Color.pink);

                

                Painel_Sul.add(bt_Novo = new JButton("Nova Janela"));

                Painel_Sul.add(bt_Sair = new JButton ("SAIR"));

                setSize(600, 450);

                setVisible(true);

                setResizable(false);

                bt_Novo.addActionListener(this);

                bt_Sair.addActionListener(this);

                bt_Amarelo.addActionListener(this);

                bt_Vermelho.addActionListener(this);

                bt_Verde.addActionListener(this);

                bt_Branco.addActionListener(this);

                bt_rosa.addActionListener(this);



        }

        public static void main (String args [])

        {

                new Interfaces02();

        }

        public void actionPerformed(ActionEvent e)

        {


        if(e.getSource()==bt_Sair)

                dispose();

        if(e.getSource()==bt_Novo)

                new Interfaces02();

        if(e.getSource()==bt_Amarelo)  

              getContentPane().setBackground(Color.YELLOW);

        if(e.getSource()==bt_Vermelho)  

              getContentPane().setBackground(Color.RED);

        if(e.getSource()==bt_Verde)  

              getContentPane().setBackground(Color.GREEN);

        if(e.getSource()==bt_Branco)  

              getContentPane().setBackground(Color.WHITE);

        if(e.getSource()==bt_rosa)  

              getContentPane().setBackground(Color.pink);


        }


}