using System;
using System.IO;

namespace IngressPasscodesParser
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                string fp_passcode_list = "ingress.passcodes.txt", fp_passcodes_parsed = "ingress.passcodes.parsed.txt", passcodes = String.Empty;
                string[] passcodes_list = File.ReadAllLines(fp_passcode_list);

                for (int i = 0; i <= (passcodes_list.Length - 1); i++)
                {
                    if(i == (passcodes_list.Length - 1)) passcodes = String.Concat(passcodes, "'" + passcodes_list[i] + "'\r\n");
                    else passcodes = String.Concat(passcodes, "'" + passcodes_list[i] + "',\r\n");
                }

                Console.WriteLine(passcodes);

                File.WriteAllText(fp_passcodes_parsed, passcodes);
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception.Message);
            }
            finally
            {
                Console.ReadLine();
            }
        }
    }
}
