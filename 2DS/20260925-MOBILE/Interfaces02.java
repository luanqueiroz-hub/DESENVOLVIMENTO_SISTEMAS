import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Interfaces02 extends JFrame implements ActionListener
{
    JButton bt_Sair, bt_Novo, bt_Azul, bt_Verde, bt_Mensagem, bt_Original;

    JPanel Painel_Sul = new JPanel(new FlowLayout(FlowLayout.CENTER));

    public Interfaces02()
    {
        setTitle("Minha Interface");

        getContentPane().setBackground(Color.LIGHT_GRAY);

        getContentPane().setLayout(new BorderLayout());

        JLabel texto = new JLabel("Escolha uma opção", JLabel.CENTER);
        texto.setFont(new Font("Arial", Font.BOLD, 24));

        getContentPane().add(BorderLayout.CENTER, texto);

        getContentPane().add(BorderLayout.SOUTH, Painel_Sul = new JPanel());

        Painel_Sul.add(bt_Novo = new JButton("Nova Janela"));
        Painel_Sul.add(bt_Azul = new JButton("Azul"));
        Painel_Sul.add(bt_Verde = new JButton("Verde"));
        Painel_Sul.add(bt_Original = new JButton("Cor Original"));
        Painel_Sul.add(bt_Mensagem = new JButton("Mensagem"));
        Painel_Sul.add(bt_Sair = new JButton("SAIR"));

        setSize(700, 450);
        setVisible(true);
        setResizable(false);

        bt_Novo.addActionListener(this);
        bt_Azul.addActionListener(this);
        bt_Verde.addActionListener(this);
        bt_Original.addActionListener(this);
        bt_Mensagem.addActionListener(this);
        bt_Sair.addActionListener(this);
    }

    public static void main(String args[])
    {
        new Interfaces02();
    }

    public void actionPerformed(ActionEvent e)
    {
        if(e.getSource() == bt_Sair)
        {
            dispose();
        }

        if(e.getSource() == bt_Novo)
        {
            new Interfaces02();
        }

        if(e.getSource() == bt_Azul)
        {
            getContentPane().setBackground(Color.BLUE);
        }

        if(e.getSource() == bt_Verde)
        {
            getContentPane().setBackground(Color.GREEN);
        }

        if(e.getSource() == bt_Original)
        {
            getContentPane().setBackground(Color.LIGHT_GRAY);
        }

        if(e.getSource() == bt_Mensagem)
        {
            JOptionPane.showMessageDialog(this, "Olá! Você clicou no botão.");
        }
    }
}